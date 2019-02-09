var acertadas = 0;
function final(){
    var tiempo=60-segundo;
    clearInterval(i);
    comprobarP1();
    comprobarP2();
    abrirVentana(`Has acertado ${acertadas} preguntas en ${tiempo} segundos`)
}

function abrirVentana(mensaje){
    var ventana=window.open("","Final",false);
    ventana.document.write(mensaje);
}

function comprobarP1(){
    var inputs =Array.from(document.getElementsByTagName('p')[0].getElementsByTagName('input'));
    var valor=inputs.pop().value;
    for (var i = 0; i < inputs.length; i++) {
        if(valor==inputs[i].value){
            acertadas++;
        }
    }
}
function comprobarP2(){
    var fecha =Number(parseInt(document.getElementsByTagName('p')[1].getElementsByTagName('input')[0].value));
    var date = new Date().getFullYear();
    date = (date-fecha)*365*24;
    fecha=Number(parseInt(document.getElementsByTagName('p')[1].getElementsByTagName('input')[1].value));
    fecha==date?acertadas++:'';
}

function completarP1(){
    var inputs =Array.from(document.getElementsByTagName('p')[0].getElementsByTagName('input'));
    for (var i = 0; i < inputs.length-1; i++) {
        inputs[i].value=parseInt(Math.random()*100);
    }
    inputs =Array.from(document.getElementsByTagName('p')[1].getElementsByTagName('input'));
    inputs[0].value=(parseInt(Math.random()*48+1970))
}

var segundo=60;
var i=setInterval(function(){
    var inputs =Array.from(document.getElementsByTagName('input'));
    inputs[inputs.length-2].value=--segundo;
    if(segundo<=0){
        clearInterval(i);
        abrirVentana(`LA BOMBA EXPLOTÓ`);
    }
},1000)

window.onload=function(){
    completarP1();
    var inputs =Array.from(document.getElementsByTagName('input'));
    inputs[inputs.length-1].addEventListener('click',final);

}
