
let cadena = "Hola mundo"

console.log(cadena);

/* Strings */

/* MODO Propiedad Length -> Devuelve la longitud de la cadena. */

// console.log("Longitud: " + cadena.length);

// ==========================================================================

/* toUpperCase() y toLowerCase() */

/* MODO Propiedad toUpperCase() -> Devuelve el String en mayuscula */

// console.log(cadena.toUpperCase());

/* MODO Propiedad toLowerCase() -> Devuelve el String en minuscula */

// console.log(cadena.toLocaleLowerCase());

// ==========================================================================

/* indexOf() */

/* MODO Propiedad indexOf() -> Devulve la posición de la letra en la cadena, si no la encuentra devuelve -1 */

// console.log(cadena.indexOf('o'));
// console.log(cadena.indexOf('mundo'));
// console.log(cadena.indexOf('d'));
// console.log(cadena.indexOf('ñ'));

// ==========================================================================

/* replace() */

/* MODO Propiedad replace() -> Reemplaza una subcadena por otra. */

// console.log(cadena.replace(' ', '...'));

// ==========================================================================

/* substring() */

/* MODO Propiedad substring() -> Extrae los caracteres de una cadena entre dos números.
                                 En caso de no darle dos, empezara de ahí en adelante */

// console.log(cadena.substring(0,3));

// console.log(cadena.substring(5));

// ==========================================================================

/* slice() */

/* MODO Propiedad slice() -> Extrae una nueva parte de la cadena y devuelve otra cadena.
                             Es posible meter número negativo y comienza desde atrás. */

// console.log(cadena.slice(0,3));
// console.log(cadena.slice(5));
// console.log(cadena.slice(-3));

// ==========================================================================

/* startWith() */

/* MODO Propiedad startWith() -> Comprueba si el String comienza con el caracter que elegimos.*/

// console.log(cadena.startsWith('H'));
// console.log(cadena.startsWith('h'));
// console.log(cadena.startsWith('m', 5));

// ==========================================================================

/* endsWith() */

/* MODO Propiedad endsWith('valor') -> Comprueba si el String termina con el caracter que le pasamos*/

// console.log(cadena.endsWith('o'));
// console.log(cadena.endsWith('a', 4));
// console.log(cadena.endsWith('n', 8));
// console.log(cadena.endsWith('Mundo'));

// ==========================================================================

/* includes() */

/* MODO Propiedad includes('valor', [inicio]) -> Igual que el IndexOf() pero devuelve true o false */

// console.log(cadena.includes('n'));
// console.log(cadena.includes('a', 5));
// console.log(cadena.includes('a', 2));

// ==========================================================================

/* repeat() */

/* MODO Propiedad repeat(valor) -> Repite el String el número de veces que quieras */

// console.log(cadena.repeat(3));