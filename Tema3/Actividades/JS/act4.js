function inicializar() {

    nuevaVentana = window.open("","", "height = 400, width = 800")

}

function buscar() {

    var url = document.getElementById('url').value;

    // nuevaVentana.location.href = url;
    nuevaVentana.location.replace(url);

}