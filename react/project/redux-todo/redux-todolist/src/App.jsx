import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import React, { useState } from 'react'
import { addtodo } from './redux/features/todoSlice'
import { removetodo } from './redux/features/todoSlice'
import { updettodo } from './redux/features/todoSlice'



const App = () => {
  const [input,setInput]=useState("")
  const [updetid,setupdetid]=useState("")
  const [boolean,setBoolean]=useState(true)
  const dispatch=useDispatch()
  const todos = useSelector(state=>state.todo.todos)

function edittodo(e,t){
setInput(t)
setBoolean(false);
setupdetid(e)

}
function updetHendler(){
  dispatch(updettodo({id:updetid,updetText:input}))
  console.log(updetid);
  console.log(input);
setBoolean(true)
setInput("")

}

const addHandler=(e)=>{
  e.preventDefault()
  dispatch(addtodo(input))
  setInput("")
}

  return (
    <>
    <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
   


    {boolean ?(
         <button onClick={addHandler}>Add</button>
      ) : (
        <button onClick={updetHendler}>Update</button>
      )}

    <div>todo</div>

{todos && todos.map((todo)=>(
    <li key={todo}>
<p>{todo.text}</p>
<button onClick={()=> dispatch(removetodo(todo.id))}>X</button>
<button onClick={()=>edittodo(todo.id,todo.text)}>Edit</button>
    </li>

))}
    </>
  )

}

export default App