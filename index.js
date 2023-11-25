const express = require('express');
const cors = require('cors');
const mysql = require('mysql2'); 
const cookieParser = require('cookie-parser');
const path = require('path');


const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(cookieParser());

// Configura la conexión a MySQL (ajusta los detalles de conexión)
const connection = mysql.createConnection({
  host: '141.136.33.185',
  user: 'u978861939_monsty',
  password: 'Losmarines1.',
  database: 'u978861939_portafolio',
});

// Establece la conexión
connection.connect((err) => {
  if (err) {
    console.error('Error de conexión a MySQL:', err);
    return;
  }
  console.log('Conexión a MySQL establecida');
});

// Ruta para incrementar el contador de descargas y enviar el archivo
app.get('/descargar', (req, res) => {
  // Lógica para aumentar el contador en la base de datos
  connection.query('UPDATE downloads SET count = count + 1', (err, results) => {
    if (err) {
      console.error('Error al actualizar el contador:', err);
      res.status(500).send('Error al actualizar el contador');
    } else {
      console.log('Contador actualizado');
      
      // Lógica para enviar el archivo (res.download u otra lógica que estés utilizando)
      // En este ejemplo, asumimos que tu archivo se encuentra en la ruta '/public/cv.pdf'
      const filePath = __dirname + '/public/cv.pdf';
      res.download(filePath, (err) => {
        if (err) {
          console.error('Error al descargar el archivo:', err);
          res.status(500).send('Error al descargar el archivo');
        } else {
          console.log('Descarga completada');
        }
      });
    }
  });
});

app.get('/obtenerDescargas', (req, res) => {
  // Lógica para obtener el número actual de descargas desde la base de datos
  connection.query('SELECT * FROM downloads', (err, results) => {
    if (err) {
      console.error('Error al obtener el contador de descargas:', err);
      res.status(500).json({ error: `Error al obtener el contador de descargas: ${err.message}` });
      return;
    }

    const downloadCount = results.length > 0 ? results[0].count : 0;
    console.log('Número de descargas enviado:', downloadCount);
    res.json({ downloads: downloadCount });
  });
});

app.get('/darLike', (req, res) => {
  // Lógica para dar like en la base de datos
  connection.query('UPDATE likes SET count = count + 1', (err, results) => {
    if (err) {
      console.error('Error al actualizar el contador de likes:', err);
      res.status(500).send('Error al dar like');
    } else {
      console.log('Contador de likes actualizado');

      // Lógica para obtener el número actual de likes desde la base de datos
      connection.query('SELECT * FROM likes', (err, results) => {
        if (err) {
          console.error('Error al obtener el contador de likes:', err);
          res.status(500).json({ error: 'Error interno del servidor' });
          return;
        }

        const likeCount = results.length > 0 ? results[0].count : 0;
        console.log('Número de likes enviado:', likeCount);
        res.json({ likes: likeCount });
      });
    }
  });
});

// Ruta para obtener el número actual de likes
app.get('/obtenerLikes', (req, res) => {
  // Lógica para obtener el número actual de likes desde la base de datos
  connection.query('SELECT * FROM likes', (err, results) => {
    if (err) {
      console.error('Error al obtener el contador de likes:', err);
      res.status(500).json({ error: `Error al obtener el contador de likes: ${err.message}` });
      return;
    }

    const likeCount = results.length > 0 ? results[0].count : 0;
    console.log('Número de likes enviado:', likeCount);
    res.json({ likes: likeCount });
  });
});


app.use(express.static(path.join(__dirname, 'build')));

// Resto de tu configuración de Express y rutas API

// Ruta para manejar todas las demás rutas y enviar el archivo HTML principal
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});