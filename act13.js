
var str;
var longStr = "";

for (var i = 0; i < 5; i++) {
  do {
    str = prompt("Introduzca una frase: ");
  } while (!str);
  longStr += str;
}

document.write("Estadisticas: <br>");
for (var i = 0; i < longStr.length; i++) {
  var aux = longStr[i];
  var auxLength = longStr.length;
  for (var j = auxLength; j == longStr.length; j--) {
    longStr = longStr.replace(aux, "");
  }
  document.write(`${aux} = ${auxLength-longStr.length}<br>`);

