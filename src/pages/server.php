<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Content-Type: application/json');
header('Access-Control-Allow-Headers: Content-Type');

$host = '141.136.33.185';
$user = 'u978861939_monsty';
$pass = 'Losmarines1.';
$db = 'u978861939_portafolio';

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die('Error de conexión a MySQL: ' . $conn->connect_error);
}

// Ruta para incrementar el contador de descargas
if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['action']) && $_GET['action'] === 'contarDescarga') {
    // Lógica para aumentar el contador en la base de datos
    $conn->query('UPDATE downloads SET count = count + 1');

    // Respuesta JSON indicando éxito
    echo json_encode(['success' => true]);
    exit;
}

// Ruta para descargar el archivo
if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['action']) && $_GET['action'] === 'descargar') {
    // Lógica para enviar el archivo
    $filePath = __DIR__ . '/public/cv.pdf';

    // Configurar encabezados para la descarga
    header('Content-Type: application/pdf');
    header('Content-Disposition: attachment; filename="cv.pdf"');
    header('Content-Length: ' . filesize($filePath));

    // Enviar el contenido del archivo
    readfile($filePath);
    exit;
}

// Ruta para obtener el número actual de descargas
if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['action']) && $_GET['action'] === 'obtenerDescargas') {
    // Lógica para obtener el número actual de descargas desde la base de datos
    $result = $conn->query('SELECT * FROM downloads');
    $downloadCount = $result->num_rows > 0 ? $result->fetch_assoc()['count'] : 0;
    echo json_encode(['downloads' => $downloadCount]);
    exit;
}

// Ruta para obtener el número actual de likes
if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['action']) && $_GET['action'] === 'obtenerLikes') {
    // Lógica para obtener el número actual de likes desde la base de datos
    $result = $conn->query('SELECT * FROM likes');
    $likeCount = $result->num_rows > 0 ? $result->fetch_assoc()['count'] : 0;
    echo json_encode(['likes' => $likeCount]);
    exit;
}

// Agrega esto al final de tu script para manejar errores
if ($conn->error) {
    http_response_code(500); // Código de error interno del servidor
    echo json_encode(['error' => $conn->error]);
    exit;
}

$conn->close();
