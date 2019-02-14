var valor;
var partida=getCookie('Partida');

function insertarTabla(elemento){
    for (var i = 0; i < 3; i++) {
        var tr = document.createElement('tr');
        insertarColumnas(tr,elemento);
    }
}

function insertarColumnas(tr,elemento){
    for (var i = 0; i < 3; i++) {
        var td = document.createElement('td');
        td.addEventListener('mouseenter',pintar)
        tr.appendChild(td);
    }
    document.body.insertBefore(tr,elemento);
}

function ventana(){
    var ventana=window.open("./ventanaej1.html","Mi ventana",false);
    //no sabia como recoger aqui el valor
}

function pintar(){
    var bo=document.getElementsByTagName('input');
    if(valor && this.value!=''){
        console.log(this.value);
        this.innerText=valor;
    }
}

function limpiar(){
    delCookie('Partida');
    var tabla = document.getElementsByTagName('tr');
    for (var i = 0; i < tabla.length; i++) {
        document.body.removeChild(tabla[i]);
    }
    insertarTabla();
    // var botones = Array.from(document.getElementsByTagName('button'));
    // insertarTabla(botones[1]);

}

function sumaTotal(){
    var valores=Array.from(document.getElementsByTagName('td'));
    var sum=0;
    for (var i = 0; i < valores.length; i++) {
        var v=Number.parseInt(valores[i].innerText);
        if (Number.isInteger(v)){
            sum+=v;
        }
    }
    var pa= document.createElement('p');
    var txt= document.createTextNode(`La suma total es ${sum}`);
    pa.appendChild(txt);
    var elemt= document.getElementsByTagName('button');
    document.body.insertBefore(pa,elemt[1]);
    elemt[2].removeEventListener('click',sumaTotal)
}

function guardar(){
    var numero;
    do {
        numero = Number.parseInt(prompt('Introduzca un numero'));
    } while (numero<10 | numero>99);

    valor=numero;
    this.value=numero;
}

window.onload = function(){
    setCookie('Partida',partida++);
    var botones = Array.from(document.getElementsByTagName('button'));
    insertarTabla(botones[1]);
    botones[0].addEventListener('click',ventana);
    botones[1].addEventListener('click',limpiar);
    botones[2].addEventListener('click',sumaTotal);
    document.addEventListener('keydown',function(e){
        e.code=="KeyL"?limpiar:'';
    });
    botones = Array.from(document.getElementsByTagName('input'));
    for (var i = 0; i < botones.length; i++) {
        botones[i].addEventListener('click',guardar)
    }
    alert(`Partida nº ${getCookie('Partida')}`);
}
