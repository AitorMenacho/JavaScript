
function inicializar() {

    document.getElementById("verImagen1").onclick  = imagen;
    document.getElementById("verImagen2").onclick  = imagen;
    document.getElementById("verImagen3").onclick  = imagen;
    document.getElementById("verImagen4").onclick  = imagen;


}

function imagen() {

    nuevaVentana = window.open(
        "", 
        "segundaPag", 
        "toolbar=yes, location=no, menubar=yes, resizable=yes"
    )

    nuevaVentana.document.write("<html><head><title>Imagen completa</title></head>");
    nuevaVentana.document.write("<body>");
    nuevaVentana.document.write("<img src='' alt=''>");
    nuevaVentana.document.write("<input type='button' value='cerrar' onClick='window.close()'>")
    nuevaVentana.document.write("</body>");
    nuevaVentana.document.write("</html>");

}