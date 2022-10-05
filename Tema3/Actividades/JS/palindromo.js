
var cadena  = prompt('¿Que palabra o frase quieres probar?')
var cadenaR = ''

cadena = cadena.toLowerCase()
cadena = cadena.replaceAll(" ", "")

for( var x = cadena.length; x >= 0; x-- ){

    cadenaR += cadena.charAt(x);

}

cadena === cadenaR ? alert('Es palindroma') : alert('No es palindroma')


