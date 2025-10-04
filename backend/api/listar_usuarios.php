<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");
require_once("../config/conexion.php");

$sql = "SELECT 
            id_usuario,
            nombre,
            apellido_paterno,
            apellido_materno,
            dni,
            correo,
            contrasena,
            telefono,
            rol,
            fecha_registro
        FROM usuarios";
        
$result = $con->query($sql);

$usuarios = [];
while ($row = $result->fetch_assoc()) {
    $usuarios[] = $row;
}

echo json_encode([
    "status" => "success",
    "data" => $usuarios
]);
?>
