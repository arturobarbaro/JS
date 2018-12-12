inicializar(){
    var filas = prompt("Numero de filas");
}

function insertarFila(){

}

window.onload = function(){
    inicializar();
    insertar.addEventListener(click,insertarFila);
    eliminar.addEventListener(click,eliminarFila);
    estilos.addEventListener(click,estilosFila);
}
