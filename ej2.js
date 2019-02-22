/**
 * Funcion encargada de crear una nueva fila con el articulo seleccionado
 * Para ello inserta las filas justo detras del ultimo elemento
 */
function actualizarTabla(){
    var elemento=$('option:selected');
    $('tr:last').before(`<tr>
      <td>${elemento.text()}</td>
      <td>${$('#cantidad').val()}</td>
      <td>${elemento.val()}</td>
    </tr>`)
}

$(()=>{
    $('#boton').click(actualizarTabla)
})
