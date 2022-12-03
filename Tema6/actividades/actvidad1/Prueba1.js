window.onload = botones;

var totalFilas = 0

function botones() {    

    nodoTabla = document.getElementById("table1");

    document.getElementById('botonAgregar').addEventListener("click", agregar);
    document.getElementById('botonEliminar').addEventListener("click", eliminar);
    document.getElementById('botonAumentar').addEventListener('click', aumentarBorde);
    document.getElementById('botonDisminuir').addEventListener('click', reducirBorde);
    document.getElementById('botonLeer').addEventListener('click', leer);

}

function aumentarBorde() {

    if( parseInt(nodoTabla.border) < 20 ) {

        nodoTabla.border = parseInt(nodoTabla.border) + 1;

    } else {

        alert("Ha superado el limite del tamaño permtido = " + parseInt(nodoTabla.border) );
    
    }

}

function reducirBorde() {

    if (nodoTabla.border > 1 ) nodoTabla.border -= 1

}

function agregar() {

    if( totalFilas < 5 ){
        
        totalFilas += 1;
        nodoFila = document.createElement("tr");
        nodoTabla.appendChild(nodoFila);

        for (celdas = 0; celdas <= 2; celdas++){
            nodoCelda = document.createElement("td");
            nodoFila.appendChild(nodoCelda);
            valorTexto = document.createTextNode("Fila " + totalFilas + " Celda " + (celdas + 1));
            nodoCelda.appendChild(valorTexto);
        }

    }

    if (totalFilas == 5) {
        document.getElementById('botonAgregar').disabled = true;
    }

    if (totalFilas > 1) {
        document.getElementById('botonEliminar').disabled = false;
    }    

}

function eliminar() {

    if (totalFilas > 1) {
        totalFilas -= 1;
        nodoTabla.removeChild(nodoTabla.lastChild);
    }

    if (totalFilas == 1) {
        document.getElementById('botonEliminar').disabled = true;
    }

    if (totalFilas < 5) {
        document.getElementById('botonAgregar').disabled = false;
    }

}

function leer() {
    
        var filas = nodoTabla.rows.length;
    
        for (i = 0; i < filas; i++) {
            alert("Tamaño del borde: " + nodoTabla.border)
        }
}