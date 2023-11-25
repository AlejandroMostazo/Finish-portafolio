import React, { useState, useEffect, useRef } from 'react';
import '../App.css';

const apiUrl = process.env.REACT_APP_API_URL || 'https://141.136.33.185:3001';
/* const apiUrl = './server.php'; */
function Home() {
  const [downloadCount, setDownloadCount] = useState(0);
  const [downloaded, setDownloaded] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    fetch(`${apiUrl}/obtenerLikes`)
      .then((response) => response.json())
      .then((data) => {
        const targetLikeCount = data.likes;
        animateCount(setLikeCount, targetLikeCount);
      })
      .catch((error) => {
        console.error('Error al obtener el número de likes:', error);
      });

    fetch(`${apiUrl}/obtenerDescargas`)
      .then((response) => response.json())
      .then((data) => {
        const targetDownloadCount = data.downloads;
        animateCount(setDownloadCount, targetDownloadCount);
      })
      .catch((error) => {
        console.error('Error al obtener el número de descargas:', error);
      });
  }, []);

  useEffect(() => {
    const hasLiked = localStorage.getItem('likeGiven') === 'true';
    setLiked(hasLiked);

    const hasDownloaded = localStorage.getItem('downloaded') === 'true';
    setDownloaded(hasDownloaded);
  }, []);

  const handleLikeClick = () => {
    if (localStorage.getItem('likeGiven') === 'true') {
      console.log('El usuario ya dio like');
      return;
    }

    fetch(`${apiUrl}/darLike`)
      .then((response) => {
        if (response.ok) {
          console.log('Like dado exitosamente.');
          setLiked(true);
          // Usa el callback para garantizar que estás utilizando el estado más reciente
          setLikeCount(prevCount => prevCount + 1);
          localStorage.setItem('likeGiven', 'true');
        } else {
          console.error('Error al dar like.');
        }
      })
      .catch((error) => {
        console.error('Error de red:', error);
      });
  };

  const handleDownloadClick = () => {
    fetch(`${apiUrl}/descargar`)
      .then((response) => {
        if (response.ok) {
          console.log('Descarga completada.');
          setDownloaded(true);
          // Usa el callback para garantizar que estás utilizando el estado más reciente
          setDownloadCount(prevCount => prevCount + 1);
          localStorage.setItem('downloaded', 'true');
        } else {
          console.error('Error al descargar el archivo.');
        }
      })
      .catch((error) => {
        console.error('Error de red:', error);
      });
  };

  const animateCount = (setCount, targetCount) => {
    const duration = 1000;
    const steps = 30;
    const stepValue = targetCount / steps;

    let currentStep = 0;

    const intervalId = setInterval(() => {
      currentStep++;
      const newValue = stepValue * currentStep;
      setCount(Math.round(newValue));

      if (currentStep === steps) {
        clearInterval(intervalId);
      }
    }, duration / steps);
  };

  const Triangulo = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      const totalFrames = 220; // Número total de frames para la animación
      let currentFrame = 0;

      const drawTriangle = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.moveTo(50, 600);
        const x = 50 + (550 / totalFrames) * currentFrame; // Ancho del triángulo dividido por el número total de frames
        ctx.lineTo(x, 600);
        ctx.lineTo(325, 50);
        ctx.closePath();

        ctx.lineWidth = 2;
        ctx.strokeStyle = '#fff';
        ctx.stroke();

        currentFrame++;

        if (currentFrame <= totalFrames) {
          requestAnimationFrame(drawTriangle);
        }
      };

      setTimeout(() => {
        drawTriangle();
      }, 2600);
    }, []);

    return <canvas ref={canvasRef} width={600} height={600} />;
  };

  return (
    <div className="App">
      <header id="particles-js" className="App-header">
        <div id='figuras'>
          <div className='geometria' id='circulo'></div>
          <div className='geometria' id='circulo2'></div>
          <Triangulo />
          <div className='geometria' id='rectangulom'></div>
          <div className='geometria' id='rectangulo'></div>
          <div className='geometria' id='desarrollador'><p>Desarrollador Web</p></div>
          <div className='geometria' id='tecnico'><p>Técnico informático</p></div>
         <a href='/cv.pdf' download><button className='geometria' id='boton' onClick={handleDownloadClick}><p>DESCARGAR CV</p></button></a>
          {/* <div id='info'>
            <a  href='/cv.pdf' download onClick={handleDownloadClick}><svg id={downloaded ? 'downloaded' : 'download'} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-down-square" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 2.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
            </svg>
            <svg id={downloaded ? 'download' : 'downloaded'} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
              <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
            </svg></a>
            <p>{downloadCount}</p>
            <a onClick={handleLikeClick} ><svg id={liked ? 'liked' : 'like'} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
            </svg>
            <svg id={liked ? 'like' : 'liked'} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
            </svg></a>
            <p>{likeCount}</p>
          </div> */}
        </div>

        <div id='nombre'> 
          <h1 id='alejandro'><span></span>ALEJANDRO</h1>
          <h1 id='mostazo'>MOSTAZO</h1>
        </div>


        <footer>
          <a href='https://www.linkedin.com/in/alejandro-mostazo-94a1a2184' target="_blank">01 <b>Linkedin</b></a> <a href="tel:+34 656574068" target="_blank" className='indent'>03 <b> +34 656 57 40 68</b></a> <br/>
          <a href='https://github.com/AlejandroMostazo' target="_blank">02 <b>GitHub</b></a><a href="mailto:alejandromostazo39@gmail.com" target="_blank" className='indent'>04 <b>alejandromostazo39@gmail.com</b></a>
        </footer>
      </header>
    </div>
  );
}

export default Home;