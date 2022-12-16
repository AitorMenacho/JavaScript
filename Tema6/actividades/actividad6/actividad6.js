window.onload = ini

function ini(){

    document.getElementById('genera').onclick   = genera
    document.getElementById('factorial').onclick = factorial
    document.getElementById('primo').onclick = primo
    document.getElementById('par').onclick = par
    document.getElementById('factorial').disabled = true
    document.getElementById('primo').disabled = true
    document.getElementById('par').disabled = true
    

}

var num1

function genera(){

    document.getElementById('factorial').disabled = false
    document.getElementById('primo').disabled = false
    document.getElementById('par').disabled = false


    num1 = Math.floor(Math.random() * 6)

    var numero = document.getElementById('numero')
    var factorial = document.getElementById('numeroFactorial')
    var esPrimo = document.getElementById('esPrimo')
    var esPar = document.getElementById('esPar')

    numero.innerHTML = ''
    factorial.innerHTML = ''
    esPrimo.innerHTML = ''
    esPar.innerHTML = ''

    var parrafo1 = document.createElement('p')

    numero.appendChild(parrafo1)
    parrafo1.innerHTML = num1

}

function factorial(){

    var factorial = document.getElementById('numeroFactorial')
    var parrafo2 = document.createElement('p')
    var resultado = 1

    for (var i = 1; i <= num1; i++) {
        resultado = resultado * i
    }

    factorial.appendChild(parrafo2)
    parrafo2.innerHTML = resultado

}

function primo(){

    var esPrimo = document.getElementById('esPrimo')
    var parrafo3 = document.createElement('p')

    esPrimo.appendChild(parrafo3)

    if (num1 == 0 || num1 == 1 || num1 == 4) {
        parrafo3.innerHTML = 'No'
    } else {
        parrafo3.innerHTML = 'Si'
    }

}

function par(){
    
        var esPar = document.getElementById('esPar')
        var parrafo4 = document.createElement('p')
    
        esPar.appendChild(parrafo4)
    
        if (num1 % 2 == 0) {
            parrafo4.innerHTML = 'Si'
        } else {
            parrafo4.innerHTML = 'No'
        }
}