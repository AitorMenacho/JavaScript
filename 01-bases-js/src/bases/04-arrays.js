

//const arreglo = new Array(100)
const arreglo = [1,2,3,4]
arreglo.push( 5 ) //Añade un nuevo número

const arreglo2 = [ ...arreglo ] //Recoge los datos de array anterior y crea uno nuevo

arreglo2.push( 6 )

const arreglo3 = arreglo2.map( function( n ){ //Recoge los datos del array y devuelve un valor en uno nuevo
    return n * 2
} )

arreglo3.push(14)

//console.log(arreglo[0]) = 1
//console.log(arreglo[3]) = 4
console.log(arreglo)
console.log(arreglo2)
console.log(arreglo3)
