function comprobar(){
    console.clear();
    comprobarDNI();
    comprobarNombre();
    comprobarNac();
    comprobarEmail();
    comprobarWeb();
    comprobarContraseña();
}
function comprobarDNI(){
    var exp=/^\d{2}\.\d{3}.\d{3}-[TRWAGMYFPDXBNJZSQVHLCKE]$/gi
    var e=document.getElementById('dni').value;
    if (e==''){
        console.log("Error: introduzca un DNI no vacío");
    }else if (!e.match(exp)){
        console.log("Error: formato de DNI no válido");
    }
}
function comprobarNombre(){
    var exp=/^[A-ZÑÁÉIOU]+\s[A-ZÑÁÉIOU]+($||(\s[A-ZÑÁÉIOU]+$||(\s[A-ZÑÁÉIOU]+)?)?)/gi
    var e=document.getElementById('nombre').value;
    if (e==''){
        console.log("Error: introduzca un nombre no vacío");
    }else if (!e.match(exp)){
        console.log("Error: formato de nombre no válido");
    }
}
function comprobarNac(){
    var exp=/^([012]\d||3[01])\/([0]\d||1[012])\/([1]\d{3}||20[01][0-8])$/gi
    var e=document.getElementById('nac').value;
    if (e==''){
        console.log("Error: introduzca una fecha");
    }else if (!e.match(exp)){
        console.log("Error: formato de fecha de nacimiento no válido");
    }
}
function comprobarEmail(){
    var exp=/^\w+@\w+\.[a-z]+$/gi
    var e=document.getElementById('email').value;
    if (e==''){
        console.log("Error: introduzca una dirección de email");
    }else if (!e.match(exp)){
        console.log("Error: formato de email no válido");
    }
}
function comprobarWeb(){
    var exp=/^http:\/\/[a-z0-9]+\.[a-z]+$/gi
    var e=document.getElementById('web').value;
    if (e==''){
        console.log("Error: introduzca una web");
    }else if (!e.match(exp)){
        console.log("Error: formato de página web no válido");
    }
}
function comprobarContraseña(){
    var exp=/^\w{8,10}$/gi
    var contraseña1=document.getElementById('c1').value;
    var contraseña2=document.getElementById('c2').value;
    if (contraseña1=='' || contraseña2==''){
        console.log("Error: introduzca una contraseña no vacia");
    }else if (contraseña1!=contraseña2) {
        console.log("Error: las contraseñas no coinciden");
    }else if (!contraseña1.match(exp)){
        console.log("Error: formato de contraseña no válido");
    }
}
window.onload = function(){
    document.getElementById('b1').addEventListener('click',comprobar);
}
