/**
 * Funcion encargada de recibir los datos ajax para comprobar el stock
 */
function cargarDatos5(){
    $.get('accesorios.php')
    .done(mostrarDatos)

    function mostrarDatos(data){
        $.each(data, function(i){
            console.log(data[i].stock);
        })
        //comprobarStock(data);
    }
}

/**
 * Funcion encargada de comprobar el stock
 * Comprueba si el stock es mayor de 5 ya que no me ha dado tiempo a terminarlo, deberia comprobar si el valor de la celda
 * es superior al amacenado en el stock
 */
function comprobarStock(data){
    var celdas=$('table > tbody > tr td');
    $.each(celdas, function(i){
        //Cambiamos el color de la celda
        if (celdas[i].innerText>5){
            //seria console.log(data[i].stock);
            celdas[i].css({
                'color':'red'
            })
            //Desaparece a los 3s
            celdas[i].fadeOut(3000)
            celdas[i].animate()
        }else{
            console.log('a');
        }
    })
}

$(()=>{
    $('#Valida').click(cargarDatos5);
})
