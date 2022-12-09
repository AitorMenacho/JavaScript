window.onload = iniciar

function iniciar() {

    var motivos = document.forms.motivo;

    for( var i = 0; i < motivos.length; i++ ) {

        motivos[i].addEventListener("click", rellenarMotivo, false);

    }

    var medallas = document.forms.medallas;

    for( var i = 0; i < medallas.length; i++ ) {

        medallas[i].addEventListener("click", rellenarMedalla, false);

    }

    var objetivo = document.forms.objetivo;

    for( var i = 0; i < objetivo.length; i++ ) {

        objetivo[i].addEventListener("click", rellenarObjetivo, false);

    }

    var despedida = document.forms.despedida;

    for( var i = 0; i < despedida.length; i++ ) {

        despedida[i].addEventListener("click", rellenarDespedida, false);

    }

}

function rellenarMotivo() {

    document.getElementById('motivoCarta').innerHTML = this.value;

}

function rellenarMedalla() {

    document.getElementById('medallaCarta').innerHTML = this.value;

}

function rellenarObjetivo() {

    document.getElementById('objetivoCarta').innerHTML = this.value;

}

function rellenarDespedida() {

    document.getElementById('despedidaCarta').innerHTML = this.value;

}