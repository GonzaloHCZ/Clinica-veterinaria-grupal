<?php
header("Content-Type: application/json");
require_once("../config/conexion.php");

$sql = "SELECT r.id, r.fecha, r.hora, r.servicio, 
               u.nombre, u.apellido_paterno, u.apellido_materno, u.correo
        FROM reservas r
        INNER JOIN usuarios u ON r.id_usuario = u.id_usuario";
$result = $con->query($sql);

$reservas = [];
while ($row = $result->fetch_assoc()) {
    $reservas[] = $row;
}

echo json_encode([
    "status" => "success",
    "data" => $reservas
]);
?>
