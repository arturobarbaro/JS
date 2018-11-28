function comprobar(){
    //setCookie("juan","juan");
    console.clear();
    comprobarCampo();
    comprobarContraseña();

}
function getCookie(name){
  var cname = name + "=";
  var dc = document.cookie;
  if (dc.length > 0) {
    begin = dc.indexOf(cname);
    if (begin != -1) {
      begin += cname.length;
      end = dc.indexOf(";", begin);
      if (end == -1) end = dc.length;
        return decodeURIComponent(dc.substring(begin, end));
    }
  }
  return null;
}
function setCookie(name, value, expires, path, domain, secure) {
  document.cookie = name + "=" + encodeURIComponent(value) +
  ((expires == null) ? "" : "; expires=" + expires.toGMTString()) +
  ((path == null) ? "" : "; path=" + path) +
  ((domain == null) ? "" : "; domain=" + domain) +
  ((secure == null) ? "" : "; secure");
}

function delCookie (name,path,domain) {
  if (getCookie(name)) {
    document.cookie = name + "=" +
    ((path == null) ? "" : "; path=" + path) +
    ((domain == null) ? "" : "; domain=" + domain) +
    "; expires=Thu, 01-Jan-70 00:00:01 GMT";
  }
}

function comprobarCampo(){
    var campos=document.getElementsByTagName('input');
    var exps=[/^\d{2}\.\d{3}\.\d{3}\-[TRWAGMYFPDXBNJZSQVHLCKE]$/gi,/^[A-ZÑÁÉIOU]+\s[A-ZÑÁÉIOU]+($||(\s[A-ZÑÁÉIOU]+$||(\s[A-ZÑÁÉIOU]+$)?)?)/i,
        /^([012]\d|3[01])\/([0]\d|1[012])\/(1\d{3}|20[01][0-8])$/i,/^\w+@\w+\.[a-z]{2,3}$/i,/^http:\/\/www.[a-z0-9]+\.[a-z]{2,3}$/i];
        for (var i = 0; i < exps.length; i++) {
            var e=campos[i].value;
            var exp=exps[i];
            if (e==''){
                console.log(`Error: introduzca un ${campos[i].name} no vacío`);
            }else if (!e.match(exp)){
                console.log(`Error: formato de ${campos[i].name} no válido`);
                campos[i].value='';
            }
            // else{
            //     alert("j");
            //     alert(setCookie('aa',campos[i].value));
            //     //alert(getCookie('aa'))
            // }
        }
}
function comprobarContraseña(){
    var exp=/^\w{8,10}$/i
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
    var inputs=document.getElementsByTagName('input');
    //input change
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('change',comprobar);
    }
    document.getElementById('b1').addEventListener('click',function(){
        var inputs=document.getElementsByTagName('input');
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].name!=''?setCookie(inputs[i].name,inputs[i].value):'';
        }
    })
    b2.addEventListener('click',function(){
        var ck = prompt("Nombre de la cookie");
        getCookie(ck)?alert(getCookie(ck)):console.log("No existe la cookie");
    })
    b3.addEventListener('click',function(){
        var inputs=document.getElementsByTagName('input');
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].value!=''?alert(getCookie(inputs[i].name)):'';
        }
    })
    b4.addEventListener('click',function(){
        var ck = prompt("Nombre de la cookie");
        getCookie(ck)?delCookie(ck):console.log("No existe la cookie");
    })
    b3.addEventListener('click',function(){
        var inputs=document.getElementsByTagName('input');
        for (var i = 0; i < inputs.length; i++) {
            var ck=inputs[i].name;
            delCookie(ck);
        }
    })
}
