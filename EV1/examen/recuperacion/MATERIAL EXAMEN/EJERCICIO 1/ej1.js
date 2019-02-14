var nivel=0;

function comprobar(){
    nivel=0;
    var valor=this.value;
    var d=Array.from(document.getElementsByTagName('form')[0].getElementsByTagName('div'));
    if (d.length>0){
        document.getElementsByTagName('form')[0].removeChild(d[0]);
    }
    if (!comprobarCampo(this,/\d/) || !comprobarCampo(this,/[a-záéióú]/) || !comprobarCampo(this,/[A-ZÁÉÍOÚ]/) || !comprobarCampo(this,/\W/) ){
        var d = document.createElement('div');
        d.setAttribute('class','caja');
        var ul=document.createElement('ul');
        if(!comprobarCampo(valor,/\d/)){
            insertarLista(d,ul,'Al menos ha utilizado un dígito','rojo');
        }else{
            insertarLista(d,ul,'Al menos ha utilizado un dígito','verde');
            ++nivel;
        }
        if(!comprobarCampo(valor,/[A-ZÁÉÍOÚ]/)||!comprobarCampo(valor,/[a-záéióú]/)){
            insertarLista(d,ul,'Al menos ha utilizado una letra mayúscula y minúscula','rojo')
        } else{
            insertarLista(d,ul,'Al menos ha utilizado una letra mayúscula y minúscula','verde');
            ++nivel;
        }
        if(!comprobarCampo(valor,/\W/)){
            insertarLista(d,ul,'Al menos ha utilizado un carácter especial','rojo')
        } else{
            insertarLista(d,ul,'Al menos ha utilizado un carácter especial','verde');
            ++nivel;
        }
        var posicion=Array.from(document.getElementsByTagName('form')[0].getElementsByTagName('p'));
        posicion=posicion[posicion.length-2];
        switch (nivel) {
            case 0:
                insertarP(d,"BAJO");
                break;
            case 1:
                insertarP(d,"BAJO");
                break;
            case 2:
                insertarP(d,"MEDIO");
                break;
            case 3:
                insertarP(d,"ALTO");
                break;
            default:

        }
        var b=Array.from(document.getElementsByTagName('form')[0].getElementsByTagName('button'));
        if (b.length==0){
            boton = document.createElement('button');
            var t=document.createTextNode('Cerrar');
            boton.appendChild(t);
            boton.addEventListener('click',function(){
                document.getElementsByTagName('form')[0].removeChild(d);
            });
            d.appendChild(boton);
        }
        document.body.getElementsByTagName('form')[0].insertBefore(d,posicion);
    }

}

function insertarP(d,nivel){
    var p=Array.from(document.getElementsByTagName('div'));
    p.length>0?p[0].removeChild(p[0].getElementsByTagName('p')[0]):'';
    p=document.createElement('p');
    var text=document.createTextNode(`Nivel de seguridad: ${nivel}`);
    p.appendChild(text);
    d.appendChild(p)
}

function comprobarCampo(elemento,exp){
    if(exp.test(elemento)){
        return true;
    }
}
function insertarLista(d,ul,mensaje,clase){
    var li=document.createElement('li');
    var t=document.createTextNode(mensaje);
    li.appendChild(t);
    li.setAttribute('class',clase);
    ul.appendChild(li)
    d.appendChild(ul);
}
function comprobarIguales(){
    if(contraseñas[0].value!=contraseñas[1].value){
        for (var i = 0; i < contraseñas.length-1; i++) {
            contraseñas[i].value='';
        }
        alert('La contraseña no coincide');
    }
}
function cookie(){
    console.log(nivel);
    if (nivel==3 && contraseñas[0].value==contraseñas[1].value){
        var numero;
        getCookie('numeroPass')?numero=getCookie('numeroPass'):numero=0;
        contraseñas=Array.from(document.body.getElementsByTagName('form')[0].getElementsByTagName('input'));
        setCookie('numeroPass',++numero);
        alert(`Contraseña creada: Es tu contraseña numero ${getCookie('numeroPass')}`)
    }
}

window.onload=function() {
    contraseñas=Array.from(document.body.getElementsByTagName('form')[0].getElementsByTagName('input'));
    contraseñas[0].addEventListener('keyup',comprobar);
    contraseñas[1].addEventListener('change',comprobarIguales);
    contraseñas[2].addEventListener('click',cookie);

}
