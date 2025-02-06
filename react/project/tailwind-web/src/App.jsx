import './App.css'
import React from 'react'
import Hader from './component/Hader'
import { Route, Routes } from 'react-router-dom'
import Footer from './component/Footer'
import Cards from './component/Cards'

const App = () => {
  return (
   <div>
    <Hader/>
    <Cards/>
    <Footer/>
   </div>
  )
}

export default App