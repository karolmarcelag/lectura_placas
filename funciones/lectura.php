<?php
include "conexion.php";

$arreglo_json = file_get_contents('php://input'); //instrucción que lee el arreglo JSON

$datos = json_decode($arreglo_json);
$datos = json_decode($arreglo_json,true);

$tipo = $datos['data_type'];

if($tipo == "alpr_group")
{
    $fecha = date('Y-m-d');
    $hora = date('H:i:s');
    $num_placa = $datos['best_plate_number'];
    $vehiculo_img = $datos["vehicle_crop_jpeg"];

    $consulta = "insert into lectura_placas.placa (fecha,hora,num_placa,vehiculo_img) values ('$fecha','$hora','$num_placa','$vehiculo_img')";
    mysqli_query($conexion,$consulta);
}
echo "Conexion correcta";

?>