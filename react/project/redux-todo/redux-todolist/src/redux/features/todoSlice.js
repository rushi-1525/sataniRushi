import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
  todos:[{id:1,text:"rushi"}]
}

export const todolistSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
   addtodo:(state,actions)=>{
    const todo ={
      id:nanoid(),
      text:actions.payload
    }
    state.todos.push(todo)
   },
   removetodo:(state,actions)=>{
state.todos=state.todos.filter((todo)=> todo.id !== actions.payload)
   },
   updettodo:(state,actions)=>{
  //   state.todos = state.todos.map((todo, i) =>
  //   i === actions.payload.id ? actions.payload : todo
  // );
    state.todos=state.todos.map((todo,i)=> i==actions.payload.id?actions.payload:todo
    
    )
       },
  },
})
 
export const { addtodo, removetodo,updettodo} = todolistSlice.actions

export default todolistSlice.reducer