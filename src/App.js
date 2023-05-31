import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './conponents/Header';
import About from './conponents/About';
import Projects from './conponents/Projects';
import Navbar from  './conponents/Navbar'; 
import './App.css';


function App() {
  return (
    <main>
      <Navbar />
    </main>
 
  );
}

export default App;
