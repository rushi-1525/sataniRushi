import { useState } from 'react'
import './App.css'


import React from 'react'

function App() {

const [color , setColor] = useState("gray")

// function handleColor(newColor) {
  
//   setColor(newColor)
// }

  return (
    <div style={{width:"500px", height:"500px" , background:color}}>
    
    <button  style={{backgroundColor:"green",color:"blue",fontSize:"20px"}}onClick={() =>setColor("green")}>Green</button>
      <button style={{backgroundColor:"black",color:"blue",fontSize:"20px"}} onClick={() =>setColor("black")} >Black</button>
      <button style={{backgroundColor:"yellow",color:"blue",fontSize:"20px"}} onClick={() =>setColor("yellow")}>Yellow</button>
      <button style={{backgroundColor:"red",color:"blue",fontSize:"20px"}} onClick={() =>setColor("red")}>Red</button>
   
    </div>
  )
}

export default App




