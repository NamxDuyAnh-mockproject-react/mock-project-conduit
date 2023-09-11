import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Home/Home"
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Register from './components/Register/Register'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      
    </Router>
  );
}

export default App;
