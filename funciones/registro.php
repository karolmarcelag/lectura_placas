<?php
include "conexion.php";

$arreglo = array();
$x = 0;

$query ="select id, nombre, num_placa from lectura_placas.nombre;";
$consulta = mysqli_query($conexion,$query);
while($tabla = mysqli_fetch_array($consulta))
{
    $arreglo[$x]["id"] = $tabla["id"];
    $arreglo[$x]["nombre"] = $tabla["nombre"];
    $arreglo[$x]["num_placa"] = $tabla["num_placa"];
    $x++;
}

if($x>0)
{
    echo json_encode($arreglo);
}
else
{
    echo "-1";
}