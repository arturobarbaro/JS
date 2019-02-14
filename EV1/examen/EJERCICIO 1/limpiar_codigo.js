var nodos_a_eliminar = new Array();
function buscar(){
	var elementos = document.getElementsByTagName('*');
	for (var k=0;k<elementos.length;k++){
		for (var i=0;i<elementos[k].childNodes.length;i++){
			var hijo = elementos[k].childNodes[i];
			if ((hijo.nodeType == 3 && !/\S/.test(hijo.nodeValue))||(hijo.nodeType==8)){
				nodos_a_eliminar[nodos_a_eliminar.length] = hijo;
			}	
		}
	}	
	destruir();
}

function destruir(){
	for(var d=0;d<nodos_a_eliminar.length;d++){
		nodos_a_eliminar[d].parentNode.removeChild(nodos_a_eliminar[d]);
	}
}

//window.onload = buscar;
