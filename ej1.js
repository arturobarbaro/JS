/**
 * Realizamos la peticion AJAX
 */
function cargarDatos(){
    $.get('accesorios.php')
    .done(mostrarDatos)

    /**
     * Insertamos los elementos option con la informacion obtenida
     * @param  data     informacion obtenida
     */
    function mostrarDatos(data){
        $.each(data, function(i){
            $('#accesorios').append(`<option value="${data[i].precio}">${data[i].etiqueta}</option>`);
        })

    }
}
$(()=>{
    cargarDatos();
})
