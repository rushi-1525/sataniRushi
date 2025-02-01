import { use, useEffect, useState } from 'react'
import './App.css'

import React from 'react'

const App = () => {
  const [count , setCount]=useState(JSON.parse(localStorage.getItem("counter")||0))
  useEffect(()=>{
    localStorage.setItem('counter',JSON.stringify(count))
  })
  
  return (
    <div className='content'>
      <div>{count}</div>
      <button onClick={()=>setCount(count-1)} disabled={count === 0 ? true : false}>-</button>
      <button  onClick={()=>setCount(count+1)}>+</button>
    </div>
  )
}

export default App