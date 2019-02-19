
$(document).ready(function(){
	$(':button').on('click', presionSubmit);
});

function presionSubmit(){
	
	
	$.ajax({type: "POST", 
			url:"servidor.php",
		//	data:{ numero: $('input[type="text"]').val()}, //realiza la conversión a texto de forma automática
			data: 'numero=' + $('input[type="text"]').val() ,
			timeout: 3,
			success:llegadaDatos,
		    error: error,
		    complete: mensaje
			});
	
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