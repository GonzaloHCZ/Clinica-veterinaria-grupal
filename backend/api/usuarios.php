<?php
header("Content-Type: application/json; charset=UTF-8");
require_once("../config/conexion.php");

$sql = "SELECT id_usuario, nombre, apellido_paterno, correo, rol FROM usuarios";
$result = $con->query($sql);

$usuarios = [];
while($row = $result->fetch_assoc()){
    $usuarios[] = $row;
}

echo json_encode($usuarios);
?>
