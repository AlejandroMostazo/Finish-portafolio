import React, { useEffect } from 'react';
import '../App.css';
import '../css/conocimientos.css';

function Conocimientos() {

  useEffect(() => {
    const handleScroll = () => {
      let fron = document.getElementById('front');
      let back = document.getElementById('back');
      let extras = document.getElementById('extras');

      let posicion1 = fron.getBoundingClientRect().top;
      let posicion2 = back.getBoundingClientRect().top;
      let posicion3 = extras.getBoundingClientRect().top;

        if (posicion1+150 < window.innerHeight) {
          fron.style.animationName = 'cajasder';
          fron.classList.add('afterfx');
        }
        if (posicion2+150 < window.innerHeight) {
          back.style.animationName = 'cajasiz';
          back.classList.add('afterfx');
        }
        if (posicion3+150 < window.innerHeight) {
          extras.style.animationName = 'cajasder';
          extras.classList.add('afterfx');
        }
    };

    window.addEventListener("scroll", handleScroll);

    // Limpia el evento cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  

  return (
    <div className="App">
      <header id="particles-js" className="App-header">
        <div id='tiempo'>
          <div className='estudios izquierda' id='smr'>
            <h3>Sistemas Microinformaticos y Redes</h3>
            <div className='textoestudios'>
              <p>Programación</p>
              <p>Servidores</p>
              <p>Sistemas</p>
              <p>Hardware</p>
              <p>Redes</p>
              <p>Web</p>
            </div>
          </div>
          <div className='estudios derecha' id='aje'>
            <h3>Animacion 3D Juegos y Entornos Interactivos</h3>
            <div className='textoestudios'>
              <p>Animación 2D y 3D</p>
              <p>Blender</p>
              <p>Diseño</p>
              <p>Web</p>
            </div>
          </div>
          <div className='estudios izquierda' id='daw'>
            <h3>Desarrollo de Aplicaciones Web</h3>
            <div className='textoestudios'>
              <p>Programación</p>
              <p>Servidores</p>
              <p>Sistemas</p>
              <p>Hardware</p>
              <p>Redes</p>
              <p>Web</p>
            </div>
          </div>
          <div className='estudios derecha' id='front'>
            <h3>JavaScript</h3>
            <h3>Bootstrap</h3>
            <h3>React</h3>
            <h3>HTML5</h3>
            <h3>CSS3</h3>
          </div>
          <div className='estudios izquierda' id='back'>
            <h3>Java</h3>
            <h3>PHP</h3>
            <h3>Laravel</h3>
            <h3>Mockito</h3>
            <h3>MySQl</h3>
            <h3>Git - GitHub</h3>
          </div>
          <div className='estudios derecha' id='extras'>
            <h3>Carnet: B</h3>
            <h3>ENG: Intermedio</h3>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Conocimientos;
