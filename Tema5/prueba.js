window.onload = iniciar

var ancho = window.screen.width
var alto  = window.screen.height

function iniciar() {

    document.addEventListener('click', mostrar, false)

}

function mostrar(e) {
    
    var caja = document.getElementById('caja')

    var mitadAlto  = alto / 2
    var mitadAncho = ancho / 2 

    var altura
    var anchura

    if( e.clientX < mitadAncho ){

        anchura = 'Izquierda'

    } else {
        
        anchura = 'Derecha'

    }

    if( e.clientY < mitadAlto ){

        altura = 'Arriba'
        
    } else {
        
        altura = 'Abajo'
    
    }

    caja.innerHTML = anchura + '<br>' + altura

}