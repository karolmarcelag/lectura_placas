<?php

require "conexion.php";

$nombre = $_POST["nombre"]; //azul variable nueva, lo naranja es el azul del script
$num_placa = $_POST["num_placa"];

$consulta = "insert into lectura_placas.nombre (nombre,num_placa) values ('$nombre','$num_placa')";
mysqli_query($conexion,$consulta);

echo "1";

?>