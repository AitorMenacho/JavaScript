

//console.log('Inicio')

/*
new Promise( (resolve, reject) => {

    console.log('Cuerpo de la promesa')
    resolve('Promesa resuelta')

})
.then( msg => console.log( msg ) )
.catch( err => console.log( err ))
*/


// new Promise( (resolve, reject) => {

//     console.log('Cuerpo de la promesa')
//     resolve('Promesa resuelta')

// })
// .then( console.log )
// .catch( console.log)

// new Promise( (resolve, reject) => {

//     console.log('Cuerpo de la promesa')
//     reject('Promesa no fue resuelta')

// })
// .then( console.log )
// .catch( console.log)

// console.log('Fin')

import { getHeroById } from './bases/08-imp-exp'

const gerHeroByIdAsync = (id) => {

    return new Promise( ( resolve, reject ) => {

        setTimeout(() => {

            const hero = getHeroById( id )

            if ( hero ) {
                
                resolve( hero )

            } else {
                
                reject('Heroe no existe')
            
            }

        }, 1000)

    });

}

gerHeroByIdAsync(12)
    .then( h => {
     
        console.log(`El héroe es: ${h.name}`)
    
    })
    .catch( console.log )
