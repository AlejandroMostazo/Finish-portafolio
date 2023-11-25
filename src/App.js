import React, { useEffect } from 'react';
import './App.css';

import Navbar from './Navbar';
import { Route, Routes } from 'react-router-dom';
import Experiencia from './pages/Experiencia';
import Home from './pages/Home';
import Proyectos from './pages/Proyectos';
import About from './pages/About';
import Conocimientos from './pages/Conocimientos';
import Contacto from './pages/Contacto';
function App() {

  useEffect(() => {
    document.title = 'Alejandro Mostazo';

  }, []);


  return (
    <div className="App">
      <header id="particles-js" className="App-header">
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='Experiencia' element={<Experiencia />} />
          <Route path='Proyectos' element={<Proyectos />} />
          <Route path='About' element={<About />} />
          <Route path='Conocimientos' element={<Conocimientos />} />
          <Route path='Contacto' element={<Contacto />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;