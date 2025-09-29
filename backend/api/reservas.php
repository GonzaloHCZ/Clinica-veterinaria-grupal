<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

require_once("../config/conexion.php");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);

    $usuario = $data['usuario'] ?? '';
    $nombreMascota = $data['nombreMascota'] ?? '';
    $tipoMascota = $data['tipoMascota'] ?? '';
    $servicio = $data['servicio'] ?? '';
    $fecha = $data['fecha'] ?? '';
    $hora = $data['hora'] ?? '';

    $sql = "INSERT INTO reservas (id_usuario, nombre_mascota, tipo_mascota, servicio, fecha, hora) 
            VALUES (?, ?, ?, ?, ?, ?)";
    $stmt = $con->prepare($sql);
    $stmt->bind_param("isssss", $usuario, $nombreMascota, $tipoMascota, $servicio, $fecha, $hora);

    if ($stmt->execute()) {
        echo json_encode(["status" => "success", "message" => "Cita reservada correctamente"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Error al reservar la cita"]);
    }
}
?>