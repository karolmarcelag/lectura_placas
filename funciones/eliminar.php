<?php

require "conexion.php";

$id = $_POST["id"];

$consulta = "delete from lectura_placas.nombre where id=$id";
mysqli_query($conexion,$consulta);

echo "1";

?>