
function inicializar() {

    document.getElementById("crear-ventana").onclick  = crearNueva;


}

// var nuevaVentana;

function crearNueva() {

    nuevaVentana = window.open(
        "", 
        "", 
        "toolbar=yes, location=no, menubar=yes, resizable=ye"
    )

    nuevaVentana.document.write("<html><head><title>Sin titulo</title></head>");
    nuevaVentana.document.write("<body>");
    nuevaVentana.document.write("<p>Con este boton cerramos esta ventana</p>");
    nuevaVentana.document.write("<input type='button' value='cerrar' onClick='window.close()'>")
    nuevaVentana.document.write("</body>");
    nuevaVentana.document.write("</html>");


}