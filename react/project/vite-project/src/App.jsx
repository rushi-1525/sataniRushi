// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";



// import Dashboard from "./pages/Dashboard";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/dashboard" element={<Dashboard/>} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
import { useState } from 'react'
import './App.css'
import Header from './pages/Header'
import Sidebar from './pages/Sidebar'
import Home from './pages/Home'


function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Home />
    </div>
  )
}

export default App
