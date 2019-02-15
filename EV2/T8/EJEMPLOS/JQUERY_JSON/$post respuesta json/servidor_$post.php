<?php
	$var1 = $_POST['variable1'];
	$var2 = $_POST['variable2'];
	 
	$suma = $var1 + $var2;
	$producto = $var1 * $var2;
	 
	// Array con las respuestas
	$respuesta['suma'] = $suma;
	$respuesta['producto'] = $producto;


	echo json_encode($respuesta);	// Enviar la respuesta al cliente en formato JSON
?>