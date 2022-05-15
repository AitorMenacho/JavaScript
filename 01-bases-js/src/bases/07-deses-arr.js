

const character = ['Goku', 'Vegeta', 'Trunks']

//const [ g, v, t] = character
//const [ , , trunks] = character
const [g, v, t, goten = 'No tiene valor'] = character

//const returnArray = () => {
    //return ['ABC',123]
//}

//const [ letters, numbers ] = returnArray()

const returnArray = ([ letters, numbers ]) => {
    return [letters, numbers]
}

const [ letters, numbers ] = returnArray(['XYZ',987])


//console.log(g, v, t)
//console.log( trunks )
//console.log( goten )
console.log( letters, numbers )