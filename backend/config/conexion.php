<?php
$host = "localhost";
$user = "root";       // Usuario de MySQL en XAMPP
$pass = "";           // Contraseña por defecto está vacía en XAMPP
$db   = "clinica_vet";

$con = new mysqli($host, $user, $pass, $db);

if ($con->connect_error) {
    die("❌ Error de conexión: " . $con->connect_error);
}
?>
