//variable incial con el precio, a la que le vamos añadiendo el precio de cada articulo nuevo
var precioTotal=400;

/**
 * Funcion encargada de crear una nueva fila con el articulo seleccionado
 * Para ello inserta las filas justo detras del ultimo elemento
 */
function actualizarTabla(){
    var elemento=$('option:selected');
    var precio=elemento.val()*$('#cantidad').val();
    precioTotal=precioTotal+precio;
    $('tr:last').before(`<tr>
      <td>${elemento.text()}</td>
      <td>${$('#cantidad').val()}</td>
      <td>${precio}</td>
    </tr>`);
    $('td:last').text(precioTotal)
}

$(()=>{
    $('#boton').click(actualizarTabla)
})
