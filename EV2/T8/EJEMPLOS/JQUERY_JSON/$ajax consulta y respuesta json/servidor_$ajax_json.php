<?php

$datos = json_decode(file_get_contents('php://input'));

$suma = $datos->variable1 + $datos->variable2;
$producto = $datos->variable1 * $datos->variable2;
 
//Array con las respuestas
$respuesta['suma'] = $suma;
$respuesta['producto'] = $producto;
 

//no es obligatorio indicar la cabecera pero sí es recomendable
header('Content-type: application/json; charset=utf-8');
echo json_encode($respuesta);	// Enviar la respuesta al cliente en formato JSON


?>