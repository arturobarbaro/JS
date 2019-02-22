var precioTotal=400;
var id=0;

/**
 * Funcion encargada de actualizar las celdad al insertar un elemento
 */
function actualizarTabla(){
    var elemento=$('option:selected');
    var precio=elemento.val()*$('#cantidad').val();
    var bool=false;

    precioTotal=precioTotal+precio;
    producto=$('option:selected').text();
    var j=$(`tbody tr td:first-child:contains(${elemento.text()})`)
    if (j[1]) {
        j.next().html(`<td>${elemento.text()}</td>
          <td>${$('#cantidad').val()+1}</td>
          <td>${precio}</td>`)
    }else{
       $('tr:last').before(`<tr id="${++id}">
        <td>${elemento.text()}</td>
          <td>${$('#cantidad').val()}</td>
          <td>${precio}</td>
        </tr>`);
    }
    //comprobarDatos(precio);

    $('td:last').text(precioTotal)
}

/**
 * Funcion que comprueba si el elemento ya esta insertado en la tabla
 * @param  int precio La variable que almacena el precio a modificar
 */
function comprobarDatos(precio){
    producto=$('option:selected').text();
    //var td=$('tbody tr td:first-child');
    $.each($('tbody tr td:first-child'), function(i){
        if($('tbody tr td:first-child')[i].innerText==producto){
            $('tbody tr td:first-child')[i].before(`<tr>
              <td>${producto}</td>
              <td>${2}</td>
              <td>${precio}</td>
            </tr>`);
        }
    })
    // $.each(td, function(i){
    //     //console.log(td.text());
    // })
    // if($('tr td:first').text()==producto){
    //     console.log($('tr td').text());
    // }
}

$(()=>{
    $('#boton').click(actualizarTabla)
})
