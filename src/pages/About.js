import React from 'react';
import '../App.css';
import '../css/sobremi.css';
import Alejandro from '../images/alejandro.jpeg';
import ocho from '../images/ocho.png';
import destornillador from '../images/destornillador.png';
import chip from '../images/chip.png';
import pinpon from '../images/pingpong.png';

function About() {

  return (
    <div className="App">
      <header id="particles-js" className="App-header">
        <div id='conticonos'>
          <div>
            <img className='iconos' src={ ocho} />
            <img className='iconos' src={ destornillador} />
          </div>
          <div>
            <img className='iconos' src={ chip } />
            <img className='iconos' src={ pinpon} />
          </div>
        </div>
        <div>
          <img id='yo' src={ Alejandro} />
          <div id='sobremi'>
            <p>Desde el instituto ya empecé a interesarme por el mundo de la informática, comencé a trastear con los ordenadores que había por mi casa,
              los arreglaba, los mejoraba. En el grado medio todos estos conocimientos se ampliaron mucho más, además de descubrir la programación con 
              arduino y las páginas web. Soy un fan del diseño y el arte en todos sus ámbitos por eso cursé el grado superior de 
              Animación 3D, juegos y entornos interactivos y después me gradué en desarrollo de aplicaciones web donde podía juntar todo lo que me gusta,
              diseño, programación y hardware.
              <br/>
               Soy una persona responsable, comprometido, constante, creativo, adaptable y autodidacta.
              Además de estar en constante crecimiento y aprender nuevas cosas en mi tiempo libre suelo jugar al billar, al pin pong, ir al cine y pasar 
              tiempo con mis amigos.
            </p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default About;
