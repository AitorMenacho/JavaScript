document.addEventListener('keydown', movernos)

var caja  = document.getElementById('caja')

var alto = outerHeight
var ancho = outerWidth

var x = 0
var y = 0

function movernos(evento) {

    if( evento.key == 'ArrowRight' || evento.key == 'd' ){

        if( x < ancho - 130){

            x = x + 10
            caja.style.left = x + 'px'

        }

    }

    if( evento.key == 'ArrowLeft' || evento.key == 'a' ){

        if( x > 10 ){

            x = x - 10
            caja.style.left = x + 'px'

        }

    }

    if( evento.key == 'ArrowUp' || evento.key == 'w' ){

        if( y > 10 ){

            y = y - 10
            caja.style.top = y + 'px'

        }

    }

    if( evento.key == 'ArrowDown' || evento.key == 's' ){

        if( y < alto - 240 ){

            y = y + 10
            caja.style.top = y + 'px'

        }

    }

}