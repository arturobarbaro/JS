var tiempo2 = 10;
var d = 10;
var tiempo = setInterval(function(){
    d--;
    document.getElementById(`tiempo`).value=`${d}`;
    if (d==0){
        abrirVentana('LA BOMBA EXPLOTÓ');
    }}
, 1000);

function generarNumero(valor){
    return Math.round(Math.random()*valor);
}

function generarFecha(valor){
    do {
        var fecha=Math.round(Math.random()*valor)+1970;
    } while (fecha>valor);
    return fecha;
}

function imprimirNumeros(){
    for (var i = 1; i < 4; i++) {
        document.getElementById(`n${i}`).value=generarNumero(99);
    }
}

function imprimirFecha(){
    var d = new Date().getFullYear();
    document.getElementById(`fecha`).value=generarFecha(d);
}

function comprobarNumeros(){
    var a=[];
    for (var i = 1; i < 4; i++) {
        a.push(document.getElementById(`n${i}`).value);
    }
    return Math.max(...a);
}

function comprobarFecha(){
    return document.getElementById(`tiempo`).value*8760;
}

function fin(){
    var aciertos=0;
    if (document.getElementById(`p1`).value==comprobarNumeros()){
        aciertos++;
    }
    if (document.getElementById(`p2`).value==comprobarFecha()){
        aciertos++;
    }
    b.removeEventListener('click',fin);
    var t = tiempo2-d;
    abrirVentana(`Has tardado ${t} segundos. <br>
        El numero de respuestas acertadas ha sido: ${aciertos}.`);

}

function abrirVentana(mensaje){
    var my = window.open("", "my", "width=200, height=100");
    my.document.write(mensaje);
    clearInterval(tiempo);
}

window.onload = function(){
    imprimirFecha();
    imprimirNumeros();
    b.addEventListener('click',fin);
}
