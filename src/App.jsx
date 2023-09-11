<<<<<<< HEAD
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
=======
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return <></>;
>>>>>>> 196995fb6f50d9dc5e5dd51568ce43d2bc303cba
}

export default App;
