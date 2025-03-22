import React from 'react'
import { removetodo } from '../redux/features/todoSlice'
import { useDispatch, useSelector } from 'react-redux'

const Read = () => {
    const todos = useSelector(state=>state.todo.todos)
    console.log(todos);
    const dispatch=useDispatch()
   
function edittodo(e,text){
  setInput(text)
}

  return (
    <>
    <div>todo</div>

{todos.map((todo)=>(
    <li key={todo}>
<p>{todo.text}</p>
<button onClick={()=> dispatch(removetodo(todo.id))}>X</button>
<button onClick={()=>edittodo(todo.id,todo.text)}>Edit</button>
    </li>

))}
    </> 
  )
}

export default Read