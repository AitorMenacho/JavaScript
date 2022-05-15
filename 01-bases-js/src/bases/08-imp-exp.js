

//import { owners } from './data/heroes'

//const [ dc, marvel ] = owners

//console.log(dc)
//console.log(marvel)

import superHeroes from '../data/heroes'

export const getHeroById = ( id ) => superHeroes.find( hero => hero.id === id )

export const getHeroByOwner = ( owner ) => superHeroes.filter( hero => hero.owner === owner)

/*
import { getHeroById, getHeroByOwner } from './bases/08-imp-exp';

console.log(getHeroById(2))

console.log(getHeroByOwner('Marvel'))
*/
