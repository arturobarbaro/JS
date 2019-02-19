
$(document).ready(function(){
	$(':button').on('click', presionSubmit);
});

function presionSubmit(){
	
	
	$("div").load("servidor.php",  { numero: $('input[type="text"]').val()}, function (responseTxt, statusTxt, xhr) {
						if (statusTxt == "success")
							alert ("Contenido externo cargado satisfactoriamente");
						if (statusTxt == "error")
							alert ("Error:" + xhr.status + ":" + xhr.statusText);
						});
	
}

