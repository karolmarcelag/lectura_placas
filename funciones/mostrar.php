<?php
include "conexion.php";

$arreglo = array();
$x = 0;

$query ="select a.num_placa, b.nombre, count(a.num_placa) as 'cantidad' from lectura_placas.placa a inner join lectura_placas.nombre b on a.num_placa = b.num_placa group by a.num_placa order by count(a.num_placa) desc;";
$consulta = mysqli_query($conexion,$query);
while($tabla = mysqli_fetch_array($consulta))
{
    $arreglo[$x]["nombre"] = $tabla["nombre"];
    $arreglo[$x]["num_placa"] = $tabla["num_placa"];
    $arreglo[$x]["cantidad"] = $tabla["cantidad"];
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