window.onload = botones;

function botones() {    

    nodoTabla = document.getElementById("table1");

    document.getElementById('botonEliminar').onclick
    document.getElementById('botonAumentar').addEventListener('click', aumentarBorde);
    document.getElementById('botonDisminuir').addEventListener('click', reducirBorde);
    document.getElementById('botonLeer').onclick;

}

function aumentarBorde() {

    if( parseInt(nodoTabla.border) < 10 ) {

        nodoTabla.border = parseInt(nodoTabla.border) + 1;

    } else {

        alert("Ha superado el limite del tamaño permtido = " + parseInt(nodoTabla.border) );
    
    }

}

function reducirBorde() {

    if (nodoTabla.border > 1 ) nodoTabla.border -= 1

}

function agregar() {
    document.getElementById('botonEliminar').disabled = false;
    document.getElementById('botonAumentar').disabled = false;
    document.getElementById('botonDisminuir').disabled = false;
    document.getElementById('botonLeer').disabled = false;

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

    if (totalFilas == 1) {
        document.getElementById('botonEliminar').disabled = true;
    }

}