import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import ImageSlider from './components/ImageSlider';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ImageSlider />
      <Routes>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/' element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;
