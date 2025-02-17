import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [todolist, setTodolist] = useState(
    JSON.parse(localStorage.getItem("todoData")) || []
  );
  const [todoIndex, setTodoIndex] = useState(null);

  function handleSubmit() {
    if (!inputText.trim()) return;
    setTodolist([...todolist, inputText.trim()]);
    setInputText("");
  }

  function handleDelete(id) {
    const filterData = todolist.filter((_, i) => i !== id);
    setTodolist(filterData);
  }

  function handleEdit(index) {
    setInputText(todolist[index]);
    setTodoIndex(index);
  }

  function handleUpdate() {
    if (!inputText.trim()) return;
    const updateData = todolist.map((element, i) =>
      i === todoIndex ? inputText.trim() : element
    );
    setTodolist(updateData);
    setInputText("");
    setTodoIndex(null);
  }

  useEffect(() => {
    localStorage.setItem("todoData", JSON.stringify(todolist));
  }, [todolist]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-4 text-blue-600">Todo List</h1>
      <div className="flex gap-2 w-full max-w-md">
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your task"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        {todoIndex !== null ? (
          <button
            className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600"
            onClick={handleUpdate}
          >
            Update
          </button>
        ) : (
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            onClick={handleSubmit}
          >
            Add
          </button>
        )}
      </div>

      <div className="mt-6 w-full max-w-md">
        {todolist.map((element, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-white p-3 my-2 rounded-lg shadow"
          >
            <p className="text-gray-700">{element}</p>
            <div className="flex gap-2">
              <button
                className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
              <button
                className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600"
                onClick={() => handleEdit(index)}
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
