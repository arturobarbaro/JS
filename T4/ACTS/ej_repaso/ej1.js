var aciertos=0;

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

var d = 60;
var tiempo = setInterval(function(){
    d--;
    document.getElementById(`tiempo`).value=`${d}`;
    if (d==0){
        var my = window.open("", "my", "width=200, height=100");
        my.document.write(`LA BOMBA EXPLOTO`);
        clearInterval(tiempo)
    }}
, 1000);

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

    if (document.getElementById(`p1`).value==comprobarNumeros()){
        aciertos++;
    }
    if (document.getElementById(`p2`).value==comprobarFecha()){
        aciertos++;
    }
    var tiempo = 60-d;
    var my = window.open("", "my", "width=200, height=100");
    my.document.write(`Has tardado ${tiempo} segundos. <br>
        El numero de respuestas acertadas ha sido: ${aciertos}.`);
    clearInterval(tiempo);
}
