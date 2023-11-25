import React, { useState, useEffect } from 'react';
import './css/menu.css';
import { Link, Outlet } from 'react-router-dom';

function Navbar() {
  const [esvisible, actualizar] = useState(false);
  const [aplicarLimiteScroll, setAplicarLimiteScroll] = useState(false);

  const cambiar = () => {
    actualizar(!esvisible);
    setAplicarLimiteScroll(!esvisible);

    if (!esvisible) {
      window.scrollTo(0, 0);
    }
  };

  useEffect(() => {
    if (aplicarLimiteScroll) {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        const limiteScroll = 0;

        if (scrollY > limiteScroll) {
          window.scrollTo(0, limiteScroll);
        }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [aplicarLimiteScroll]);

  return (
    <div id='navbar'>
      <Link to={'/'} id='home' style={{ zIndex: esvisible ? '4' : '7'}}>
        <h2>A</h2>
        <h2 id='m'>M</h2>
      </Link>
      <div id='bolas'>
        <div id='menu' onClick={cambiar} className={ esvisible ? 'menu-active' : ''}></div>
      </div>
      <div id='animacion' className={ esvisible ? 'animacion-active' : ''}>
      </div>
      <div id='contenedor' style={{opacity: esvisible ? '1' : '0',
                                   zIndex: esvisible ? '5' : '-1'}}> 
        <Link to={'./Experiencia'}  onClick={cambiar}><h1>EXPERIENCIA</h1></Link> 
        <Link to={'./Proyectos'}  onClick={cambiar}><h1>PROYECTOS</h1></Link> 
        <Link to={'./About'}  onClick={cambiar}><h1>SOBRE MI</h1></Link> 
        <Link to={'./Conocimientos'}  onClick={cambiar}><h1>CONOCIMIENTOS</h1></Link> 
        <Link to={'./Contacto'}  onClick={cambiar}><h1>CONTACTO</h1></Link> 
      </div>
      <Outlet/>
    </div>
  );
}

export default Navbar;
