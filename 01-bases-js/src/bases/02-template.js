

const nombre = 'Aitor'
const apellido = 'Menacho'

//const nombreCompleto = nombre + ' ' + apellido

const nombreCompleto = `${ nombre } ${ apellido }`

//console.log(`Resultado: ${ 1 + 1 }`)

function getSaludo( nombre ) {
    return 'Hola ' + nombre
}

console.log(`Este es un texto: ${ getSaludo(nombre) }`)