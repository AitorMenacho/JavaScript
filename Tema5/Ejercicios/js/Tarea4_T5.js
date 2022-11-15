document.addEventListener('keydown', movernos)

var caja = document.getElementById('caja')

var x = 0
var y = 0

function movernos(evento) {

    if( evento.key == 'ArrowRight' || evento.key == 'd' ){

        x = x + 10
        caja.style.left = x + 'px'

    }

    if( evento.key == 'ArrowLeft' || evento.key == 'a' ){

        x = x - 10
        caja.style.left = x + 'px'

    }

    if( evento.key == 'ArrowUp' || evento.key == 'w' ){

        y = y - 10
        caja.style.top = y + 'px'

    }

    if( evento.key == 'ArrowDown' || evento.key == 's' ){

        y = y + 10
        caja.style.top = y + 'px'

    }
    

}