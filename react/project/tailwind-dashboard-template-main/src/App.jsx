import React, { useEffect } from 'react';

import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.css';

import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/Dashboard';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
       <Routes>
     
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <ProtectedRoute path="/" component={Dashboard} />
     
    </Routes>
    </>
  );
}

export default App;
