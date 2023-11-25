import React, { useRef, useState } from 'react';
import '../App.css';
import '../css/contacto.css';
import emailjs from '@emailjs/browser';

function Contacto() {


  const refFrom = useRef();
  const [showCheckmark, setShowCheckmark] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const serviceId = "service_de1ezf6";
    const templateId = "template_g827k6o";
    const apikey = "HaTzwad2WvIwzEGr7";
    emailjs.sendForm(serviceId, templateId, refFrom.current, apikey)
    .then(result => console.log(result.text))
    .catch(error => console.error(error))
    setShowCheckmark(true); // Mostrar el checkmark si el envío es exitoso
    refFrom.current.reset();
  }


  return (
    <div className="App">
      <header id="particles-js" className="App-header">
        <form ref={refFrom} action='' onSubmit={handleSubmit}>
          <div>
            <label for="email">Correo</label>
            <input id='email' required  className='formulario' type="email" name='reply_to'></input>
            <label required for="email">Asunto</label>
            <input className='formulario' name='subjet' type='text'></input>
            <label required for="email">Mensaje</label>
            <textarea className='formulario' name='body'></textarea> 
            <button id='enviar' className='formulario' type='submit'>ENVIAR
              <svg id='svg' style={{ display: showCheckmark ? 'inline' : 'none' }} xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
              </svg>
            </button>
          </div>
        </form>
        <div className='figuras' id='circuloo'></div>
{/*         <div className='figuras' id='rectan'></div> */}
        <div className='figuras' id='linea'></div>
        <div className='figuras' id='rombo'></div>
      </header>
    </div>
  );
}
export default Contacto;
