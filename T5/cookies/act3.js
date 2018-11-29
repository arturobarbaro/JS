window.onload=function(){
    function validacionNombre(){
    }

    function validacionHijos(){
        if(document.getElementById('hijos').validity.valueMissing)){
            document.getElementById('hijos').setCustomValidity("Inserte un valor");
        }else if(document.getElementById('hijos').validity.rangeOverflow){
            document.getElementById('hijos').setCustomValidity("El numero de hijos debe ser maximo 10");
        }else if(document.getElementById('hijos').validity.rangeUnderflow){
            document.getElementById('hijos').setCustomValidity("El numero de hijos debe ser minimo 0");
        }
    }
    b1.addEventListener('click',validacionHijos);
}
