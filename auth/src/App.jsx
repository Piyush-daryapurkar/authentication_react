import React from 'react';
import Home from './Home';
import Nav from './Nav';
import Signup from './Signup';
import Login from './Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const nofify=()=>toast("wow so easy")
  
  return (
    <>
    <button onClick={nofify}>click</button>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </>

  );
}

export default App;

