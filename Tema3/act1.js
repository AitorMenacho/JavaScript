

function inicializar() {

    document.getElementById("crear-ventana").onclick  = crearNueva;
    document.getElementById("cerrar-ventana").onclick = cerrarNueva;


}

var nuevaVentana;

function crearNueva() {

    nuevaVentana = window.open("https://aitormenachovega.000webhostapp.com/", "", "height = 400, width = 800");

}

function cerrarNueva() {

    if (nuevaVentana) {

        nuevaVentana.close();
        nuevaVentana = null;
    
    }

}