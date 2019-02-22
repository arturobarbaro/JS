<?php

header('Content-type: application/json; charset=utf-8');

class Accesorio   {
			public $etiqueta;
			public $precio;
			public $stock;
	}

	$a1 = new Accesorio();
	$a1->etiqueta = 'Botella de agua 0,5';
	$a1->precio = '4.0';
	$a1->stock = '3';

	$a2 = new Accesorio();
	$a2->etiqueta = 'Botella de agua 0,9';
	$a2->precio = '5.0';
	$a2->stock = '1';

	$a3 = new Accesorio();
	$a3->etiqueta = 'Faro delantero';
	$a3->precio = '15.5';
	$a3->stock = '2';

	$a4 = new Accesorio();
	$a4->etiqueta = 'Faro trasero';
	$a4->precio = '12';
	$a4->stock = '6';

	$a5 = new Accesorio();
	$a5->etiqueta = 'Pack faros delantero y trasero';
	$a5->precio = '23.99';
	$a5->stock = '3';

	$accesorios = array($a1,$a2,$a3,$a4,$a5);


echo json_encode($accesorios);


?>
