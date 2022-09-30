function ventanas() {
    
        for( x = 1; x <= 5; x++ ){

            nuevaVentana = window.open(
                "", 
                "", 
                "toolbar=yes, location=no, menubar=yes, resizable=yes"
            )
        
            nuevaVentana.document.write(`<html><head><title>pantalla ${x}</title></head>`);
            nuevaVentana.document.write("<body>");
            nuevaVentana.document.write("<input type='button' value='cerrar' onClick='window.close()'>")
            nuevaVentana.document.write("</body>");
            nuevaVentana.document.write("</html>");

        }


}