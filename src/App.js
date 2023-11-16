import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';

const App = () => {
  return (
    <>
      <Router>
      
      <Navbar/>
      <Routes>

          <Route exact path="/" element=<Home/> > </Route>
                 
        </Routes>
      </Router>
    </>
  )
}

export default App
