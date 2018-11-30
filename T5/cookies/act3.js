// function validacionHijos(e){
//     e.preventDefault();
//     if(document.getElementById('hijos').validity.valueMissing)){
//         document.getElementById('hijos').setCustomValidity("Inserte un valor");
//     }else if(document.getElementById('hijos').validity.rangeOverflow){
//         document.getElementById('hijos').setCustomValidity("El numero de hijos debe ser maximo 10");
//     }else if(document.getElementById('hijos').validity.rangeUnderflow){
//         document.getElementById('hijos').setCustomValidity("El numero de hijos debe ser minimo 0");
//     }
// }
//
// // function validacionNombre(e){
// //     e.preventDefault();
// //     if (nombre.validity.patternMismatch) {
// //         nombre.setCustomValidity('Formato erroneo);
// //         //nombre.validationMessage = "Solo puede introducir caracteres alfabéticos de a - z"; //no se puede hacer, SOLO LECTURA
// //     }
// //     if (nombre.validity.valueMissing) {
// //         nombre.setCustomValidity('Es obligatorio rellenar este campo del formulario');
// //     }
// //     error.innerHTML = nombre.validationMessage;
// // }
//
// window.onload=function(){
//
//
//
//     //nombre.addEventListener('change',validacionNombre);
//     hijos.addEventListener('change',validacionHijos);
//     b1.addEventListener('change',function(){
//         validacionNombre();
//         validacionHijos();
//     });
// }
function validarNombre(){
    if (this.checkValidity() == false) {
        document.getElementById('nombre').setCustomValidity("Inserte un valor");
        if (nombre.validity.valueMissing) {
            nombre.setCustomValidity('Es obligatorio rellenar este campo del formulario');
        }else if (nombre.validity.patternMismatch) {
            nombre.setCustomValidity('Formato erroneo');
            //nombre.validationMessage = "Solo puede introducir caracteres alfabéticos de a - z"; //no se puede hacer, SOLO LECTURA
        }

        document.getElementById("error").innerHTML =` ${this.validationMessage}. ${this.title}`;
        this.reportValidity();
        this.value = '';
    }
}

function validarHijos(){
    if (this.checkValidity() == false) {
        document.getElementById('hijos').setCustomValidity("Inserte un valor");
        if(document.getElementById('hijos').validity.rangeOverflow){
            document.getElementById('hijos').setCustomValidity("El numero de hijos debe ser maximo 10");
        }else if(document.getElementById('hijos').validity.rangeUnderflow){
            document.getElementById('hijos').setCustomValidity("El numero de hijos debe ser minimo 0");
        }
        document.getElementById("error").innerHTML =` ${this.validationMessage}`;
        this.reportValidity();
        this.value = '';
    }
}

window.onload = function(){
  hijos.addEventListener('change',validarHijos)
  nombre.addEventListener('change',validarNombre)

  b1.onclick = function(e){
    e.preventDefault(); //evitamos que salga el mensaje con el error
  }

}
