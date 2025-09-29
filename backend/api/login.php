<?php
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *"); 
header("Access-Control-Allow-Methods: POST");

require_once("../config/conexion.php"); // 👈 ajusta la ruta según tu estructura

// Leer datos enviados desde React
$data = json_decode(file_get_contents("php://input"), true);

if (!isset($data["correo"]) || !isset($data["contrasena"])) {
    echo json_encode(["status" => "error", "message" => "Faltan datos"]);
    exit;
}

$correo = $data["correo"];
$contrasena = $data["contrasena"];

// Consulta
$sql = "SELECT * FROM usuarios WHERE correo = ? LIMIT 1";
$stmt = $con->prepare($sql);
$stmt->bind_param("s", $correo);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $usuario = $result->fetch_assoc();

    // ⚠️ En producción usar password_verify()
    if ($usuario["contrasena"] === $contrasena) {
        echo json_encode([
            "status" => "success",
            "message" => "Login correcto",
            "usuario" => [
                "id_usuario" => $usuario["id_usuario"],
                "nombre" => $usuario["nombre"],
                "apellido_paterno" => $usuario["apellido_paterno"],
                "apellido_materno" => $usuario["apellido_materno"],
                "correo" => $usuario["correo"],
                "rol" => $usuario["rol"]
            ]
        ]);
    } else {
        echo json_encode(["status" => "error", "message" => "Contraseña incorrecta"]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Usuario no encontrado"]);
}

$stmt->close();
$con->close();
?>
