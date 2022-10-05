
var palabra = prompt('¿Que palabra quieres ver?')
var vocal    = ''
var cantidad = 0

palabra = palabra.toLowerCase()

for(var x = 0; x < palabra.length; x++){

    vocal = palabra.charAt(x)

    if( vocal === 'a' | vocal === 'e' | vocal === 'i' | vocal === 'o' | vocal === 'u') {

        cantidad++

    }

}

alert('Cantidad de vocales: ' + cantidad)