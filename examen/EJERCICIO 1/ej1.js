var valor;
var partida=getCookie('Partida');

function insertarTabla(elemento){
    var tabla=document.createElement('table');
    for (var i = 0; i < 3; i++) {
        var tr = document.createElement('tr');
        insertarColumnas(tabla,tr,elemento);
    }
}

function insertarColumnas(tabla,tr,elemento){
    for (var i = 0; i < 3; i++) {
        var td = document.createElement('td');
        td.addEventListener('mouseenter',pintar)
        tr.appendChild(td);
    }
    tabla.appendChild(tr);
    document.body.insertBefore(tabla,elemento);
}

function ventana(){
    var ventana=window.open("","Mi ventana",false);
    for (var i = 0; i < 3; i++) {
        ventana.document.write(`<div class=""><input type="text" name="" value=""></div>`);
    }
    ventana.document.write(`<button type="button" name="button">Cerrar</button>`);
    var e = ventana.document.getElementsByTagName('input');
    for (var i = 0; i < e.length; i++) {
        e[i].addEventListener('change',function(){
            reg = /^\d{2}$/
            if (reg.test(this.value)) {
                this.setAttribute('readonly',`readonly`);
                if(Array.from(this.parentNode.getElementsByTagName('span')).length>0){
                    this.parentNode.removeChild(this.parentNode.getElementsByTagName('span')[0]);
                }
            } else{
                var sp = document.createElement('span');
                var text = document.createTextNode('Introduzca dos digitos');
                sp.appendChild(text);
                this.parentNode.appendChild(sp);
            }
        });
    }
    ventana.document.getElementsByTagName('button')[0].addEventListener('click',function(){
        var e = ventana.document.getElementsByTagName('input');
        var casillas = document.getElementsByTagName('input');
        reg = /^\d{2}$/
        contador=0;
        for (var i = 0; i < e.length; i++) {
            if (reg.test(e[i].value)) {
                contador++;
            }
        }
        if (contador==3){
            for (var i = 0; i < e.length; i++) {
                reg.test(e[i].value)?casillas[i].value=e[i].value:'';
            }
            ventana.close();
        }
    });
}

function pintar(){
    var bo=document.getElementsByTagName('input');
    if(valor && !this.value){
        this.innerText=valor;
    }
}

function limpiar(){
    delCookie('Partida');
    window.location.reload();

}

function sumaTotal(){
    var ps = Array.from(document.getElementsByTagName('p'));
    ps.length>0?document.body.removeChild(ps[0]):'';
    var valores=Array.from(document.getElementsByTagName('td'));
    var sum=0;
    for (var i = 0; i < valores.length; i++) {
        var v=Number.parseInt(valores[i].innerText);
        Number.isInteger(v)?sum+=v:'';
    }
    var pa= document.createElement('p');
    var txt= document.createTextNode(`La suma total es ${sum}`);
    pa.appendChild(txt);
    var elemt= document.getElementsByTagName('button');
    document.body.insertBefore(pa,elemt[1]);
}

function guardar(){
    valor=this.value
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
    //alert(`Partida nº ${getCookie('Partida')}`);
}
