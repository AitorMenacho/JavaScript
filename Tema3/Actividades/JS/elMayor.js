
var edad1 = 0;
var edad2 = 0;
var edad3 = 0;

var nombre1 = prompt('Primer nombre');
edad1 = prompt('Primera edad');
var nombre2 = prompt('Segundo nombre');
edad2 = prompt('Segunda edad');
var nombre3 = prompt('Tercer nombre');
edad3 = prompt('Tercera edad');

var mayor = Math.max(edad1, edad2, edad3)

if (mayor == edad1) {
    alert(nombre1 + " es el mayor")
}

if (mayor == edad2) {
    alert(nombre2 + " es el mayor")
}

if (mayor == edad3) {
    alert(nombre3 + " es el mayor")
}