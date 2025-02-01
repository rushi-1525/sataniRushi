import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [todolist, setTodolist] = useState(
    JSON.parse(localStorage.getItem("todoData")) || []
  );

  function handleSubmit() {
    setTodolist([...todolist, inputText]); 
    setInputText("");
  }

  function handleDelete(id) {
    let filterData = todolist.filter((element, i) => i != id);
    setTodolist(filterData);
  }

  useEffect(() => {
    localStorage.setItem("todoData", JSON.stringify(todolist));
  }, [todolist]);

  return (
    <>
      <input
        type="text"
        placeholder="enter your task"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      />
      <button onClick={handleSubmit}>ADD</button>
      {todolist &&
        todolist.map((element, index) => {
          return (
            <div key={index}>
              <p>{element}</p>
              <button
                onClick={() => {
                  handleDelete(index);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
    </>
  );
}

export default App;