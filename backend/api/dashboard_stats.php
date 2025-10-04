<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");
require_once("../config/conexion.php");

// Total de reservas
$reservas = $con->query("SELECT COUNT(*) AS total FROM reservas")->fetch_assoc();

// Total de usuarios
$usuarios = $con->query("SELECT COUNT(*) AS total FROM usuarios")->fetch_assoc();

echo json_encode([
    "status" => "success",
    "data" => [
        "reservas" => $reservas["total"],
        "usuarios" => $usuarios["total"]
    ]
]);
?>
