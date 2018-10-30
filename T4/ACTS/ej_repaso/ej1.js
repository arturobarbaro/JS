function modificar_valores(){
    for (var i = 0; i < 3; i++) {
        window.document.forms[0].element[i].values=Math.round(Math.ramdon()*99);
    }

}
