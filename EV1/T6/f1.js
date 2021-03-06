function comprobar(element,exp){
    var valor=element.value;
    eliminarP(element.parentElement.id);
    if (valor==''){
        error(`Error: introduzca un valor en ${element.name} no vacío`,element.parentElement.id);
    }else if (!exp.test(valor)){
        error(`Error: formato de ${element.name} no válido`,element.parentElement.id);
        element.value='';
    }
}
function error(error, id){
    var respuesta=document.createElement('p');
    var texto = document.createTextNode(error);
    respuesta.appendChild(texto);
    document.getElementById(id).appendChild(respuesta);
}
function comprobarContraseña(){
    var exp=/^\w{8,10}$/i;
    var contraseña1=document.getElementById('c1').value;
    var contraseña2=document.getElementById('c2').value;
    eliminarP("div6");
    if (contraseña1=='' || contraseña2==''){
        error("Error: introduzca una contraseña no vacia","div6");
    }else if (contraseña1!=contraseña2) {
        error("Error: las contraseñas no coinciden","div6");
    }else if (!contraseña1.match(exp)){
        error("Error: formato de contraseña no válido","div6");
    }
}
function eliminarP(id){
    var pa = document.getElementById(id).getElementsByTagName('p');
    for (var i = 0; i < pa.length; i++) {
        document.getElementById(id).removeChild(pa[0]);
    }
}
window.onload = function(){
    var campos=Array.from(document.getElementsByTagName('input'));
    var exps=[
                /^\d{2}\.\d{3}\.\d{3}\-[TRWAGMYFPDXBNJZSQVHLCKE]$/gi,
                /^[A-ZÑÁÉIOU]+\s[A-ZÑÁÉIOU]+($||(\s[A-ZÑÁÉIOU]+$||(\s[A-ZÑÁÉIOU]+$)?)?)/i,
                /^([012]\d|3[01])\/([0]\d|1[012])\/(1\d{3}|20[01][0-8])$/i,
                /^\w+@\w+\.[a-z]{2,3}$/i,
                /^https?:\/\/www.[a-z0-9]+\.[a-z]{2,3}$/i
            ];
    // FALLA AL PASAR exp[i]. Por lo que asignamos los eventos manualmente.
    // for (var i = 0; i < campos.length -2; i++) {
    //     campos[i].addEventListener('change',function(){
    //         comprobar(this,exp[i])
    //         console.log(i+1);
    //     })
    // }
    campos[0].addEventListener('change',function(){comprobar(this,exps[0])})
    campos[1].addEventListener('change',function(){comprobar(this,exps[1])})
    campos[2].addEventListener('change',function(){comprobar(this,exps[2])})
    campos[3].addEventListener('change',function(){comprobar(this,exps[3])})
    campos[4].addEventListener('change',function(){comprobar(this,exps[4])})
    document.getElementById('b1').addEventListener('click',comprobarContraseña);
}
