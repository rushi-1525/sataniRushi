import React from 'react'
import { Route, Router } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'
import Home from './Home'

const Dashboard = () => {
  return (
    <Router>
                <Route  element={<Header/>} />
                <Route  element={<Sidebar/>} />
                <Route  element={<Home/>} />

    </Router>
  )
}

export default Dashboard