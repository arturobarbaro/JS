
$(document).ready(function(){
	$(':button').on('click', presionSubmit);
});

function presionSubmit(){
	
	$.get("servidor.php", { numero: $('input[type="text"]').val()}).done(llegadaDatos).fail(error).always(mensaje);
	
}


function llegadaDatos(datos){
	var res=$("#resultado").text();
	res += datos; 
	$("#resultado").text(res);
}

function error(request, errorMessage){
	alert('Error: ' + errorMessage);
	
}

function mensaje(){
	alert('Esta función se ejecuta siempre independiente de si la petición se ha realizado con éxito o no');
}