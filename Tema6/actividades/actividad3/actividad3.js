window.onload = ini

function ini(){

    document.getElementById('genera').onclick   = genera
    document.getElementById('compara').onclick  = compara
    document.getElementById('compara').disabled = true
    

}

var num1
var num2 

function genera(){

    document.getElementById('compara').disabled = false

    num1 = Math.floor(Math.random() * 100)
    num2 = Math.floor(Math.random() * 100)

    var primero = document.getElementById('primero')
    var segundo = document.getElementById('segundo')
    var resultado = document.getElementById('resultado')

    primero.innerHTML = ''
    segundo.innerHTML = ''
    resultado.innerHTML = ''

    var parrafo1 = document.createElement('p')
    var parrafo2 = document.createElement('p')

    primero.appendChild(parrafo1)
    parrafo1.innerHTML = num1

    segundo.appendChild(parrafo2)
    parrafo2.innerHTML = num2

}

function compara(){

    var resultado = document.getElementById('resultado')
    var primero   = document.getElementById('primero')
    var segundo   = document.getElementById('segundo')

    if( num1 > num2 ){

        primero.innerHTML   = ''
        resultado.innerHTML = num1

    } else {

        segundo.innerHTML   = ''
        resultado.innerHTML = num2

    }

}