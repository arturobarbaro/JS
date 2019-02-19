<?php
$var1 = $_GET['variable1']; //$_REQUEST['variable1']
$var2 = $_GET['variable2']; //$_REQUEST['variable2']
 
$suma = $var1 + $var2;
$producto = $var1 * $var2;
 
// Array con las respuestas
$respuesta['suma'] = $suma;
$respuesta['producto'] = $producto;

//no es obligatorio indicar la cabecera pero sí es recomendable
header('Content-type: application/json; charset=utf-8');
echo json_encode($respuesta);	// Enviar la respuesta al cliente en formato JSON


?>