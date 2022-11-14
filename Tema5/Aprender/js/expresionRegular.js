var cadena = 'esto es una cadena de ejemplo para dwec'
var patron = /dwec/
var rtdo   = patron.test(cadena)
console.log(rtdo)

if( rtdo ){
    alert('Lo encontré')
} else {
    alert('No lo encuentro')
}