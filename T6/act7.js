function inicializar(){
    var filas;
    do {
        filas = parseInt(Number(prompt("Numero de filas")));
    } while (!parseInt(filas));
    for (var i = 0; i < filas; i++) {
        pintarTabla();
    }
}

function insertarFila(){
    var pos=comprobarPos();
    pintarTabla(pos);
}

function pintarTabla(pos=0){
    var tr=document.createElement('tr');
    for (var i = 0; i < 3; i++) {
        var td=document.createElement('td');
        td.addEventListener('click',modificar)
        tr.appendChild(td);
    }
    tabla.insertBefore(tr,tabla.childNodes[pos-1]);
}

function eliminarFila(){
    pos = comprobarPos()-1;
    var trs =Array.from(tabla.getElementsByTagName('tr'));
    console.log(tabla.removeChild(trs[pos]));
}

function estilosFila(){
    tabla.className=="clase1"?tabla.setAttribute("class","clase2"):tabla.setAttribute("class","clase1");
}

function comprobarPos(){
    var pos;
    var max=tabla.rows.length;
    var min=0;
    do {
        pos = parseInt(Number(prompt("Inserte la posicion")));
    } while (!(parseInt(pos)) && pos>min && pos<=max);
    return pos;
}

function modificar(){
    this.innerText=prompt("Nuevo valor");
}

window.onload = function(){
    inicializar();
    insertar.addEventListener('click',insertarFila);
    eliminar.addEventListener('click',eliminarFila);
    estilos.addEventListener('click',estilosFila);
}
