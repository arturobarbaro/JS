//act1
var map = new Map();
map.set("DWECL", "Desarrollo Web en Entorno Cliente");
map.set("DAW", "Despliegue Aplicaciones Web");
//a
console.log(`-------A---------`);
console.log(map.size);
//b
console.log(`-------B---------`);
map.forEach(function (item, key, mapObj) {
    console.log(item);
});
//c
console.log(`-------C---------`);
var iterator1 = map.keys();
for (var i = 0; i < map.size; i++) {
    console.log(iterator1.next().value);
}
// d
console.log(`-------D---------`);
var iterator1 = map.entries();
for (var i = 0; i < map.size; i++) {
    console.log(iterator1.next().value);
}
//e
console.log(`-------E---------`);
map.has('DAW')?console.log(map.get('DAW')):console.log("No existe");
//f
console.log(`-------F---------`);
map.has('DAW')?console.log(map.delete('DAW')):console.log("No existe");
var iterator1 = map.entries();
for (var i = 0; i < map.size; i++) {
    console.log(iterator1.next().value);
}
