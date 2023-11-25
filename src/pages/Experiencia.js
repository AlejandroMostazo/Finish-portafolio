import React, { useEffect } from 'react';
import '../App.css';
import '../css/experiencia.css';
import Accenture from '../images/Accenture.png';
import Emel from '../images/emel.png';
import AccentureM from '../images/accenturemalaga.jpg';
import EmelL from '../images/emellisboa.jpg';


function Experiencia() {

  return (
      <header id="particles-js" className="App-header">
        <div id='experiencia'>
          <div id='timeline'>
            <img src={Accenture} />
            <div id='accenture'>
              <p>En Accenture trabajé con Java además de aprender sobre Testing (Mockito), Maven, POO, 
                POSTMAN y conexiones con BDD en MySQL. En el 1º año de prácticas realizamos un proyecto conjunto con nuestros compañeros, mientras que en el
                2º año me introdujeron a un equipo de desarrollo donde toquemos varias tenologías, IA con Python, transformers y Node.JS. <br/> Yo concretamente 
                estuve en el equipo de desarrollo para la mejora de una aplicación web interna.</p>
            </div>
            <img src={Emel} />
            <div id='emel'>
              <p>Emel es una empresa ubicada en Lisboa donde realicé mis prácticas Erasmus. <br/>
                Estuve en el departamento de infromática donde rehicimos una aplicación web que monotirizaba APIs, configuramos el servidor y remodelamos el diseño. <br/>
                Aquí aprendí sobre React además de mejorar mi nivel de inglés.
              </p>
            </div>
            <div id='fechaA'>
              <p id='primero'>01/23</p>
              <p id='segundo'>03/23</p>
            </div>
            <div id='fechaE'></div>
          </div>
          <div id='imgempresas'>
            <img className='edificios' src={AccentureM} />
            <br/>
            <img className='edificios' src={EmelL} />
          </div>
            <div id='cirlce'></div> 
            <div id='line'></div>
        </div>
      </header>
  );
}

export default Experiencia;
