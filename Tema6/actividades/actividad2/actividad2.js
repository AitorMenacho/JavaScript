// Cargamos la función botones() al cargar la página
window.onload = botones;

// Creamos una variable global para contar poner el identificador de cada fila
var x = 0;

function botones() {

    // Cargamos la función agregar() al pulsar el botón "Añadir"
    document.getElementById("annadir").addEventListener("click", agregar);

}

function agregar() {

    // Sumamos 1 al contador cada vez que entramos
    x++

    // Sacamos el valor de los campos
    var nombre    = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    var curso     = document.getElementById("curso").value;

    // Comprobamos que los campos no estén vacíos
    if(nombre == "" || apellidos == "" || curso == "") {

        //Si están vacíos mostramos un mensaje de error
        alert("Rellena todos los campos");

    } else {

        // Creamos un pattern para el nombre y apellido
        var pattern = new RegExp("^[a-zA-Z áéíóúÁÉÍÓÚª]+$");

        // Comprobamos que el nombre y el apellido sean correctos
        if(pattern.test(nombre) && pattern.test(apellidos)) {

            // Si son correctos sacamos la tabla
            var tabla = document.getElementById("registros");

            // Creamos una fila
            var fila   = document.createElement("tr");
            var celda1 = document.createElement("td");
            var celda2 = document.createElement("td");
            var celda3 = document.createElement("td");
            var celda4 = document.createElement("td");
            var celda5 = document.createElement("td");

            //La generamos
            tabla.appendChild(fila);
            fila.appendChild(celda1);
            celda1.innerHTML = x;
            fila.appendChild(celda2);
            celda2.innerHTML = nombre;
            fila.appendChild(celda3);
            celda3.innerHTML = apellidos;
            fila.appendChild(celda4);
            celda4.innerHTML = curso;
            fila.appendChild(celda5);
            celda5.innerHTML = "<button onclick='eliminar(this)'>Borrar solicitud</button>";

        } else {
            
            // Si no son correctos mostramos un mensaje de error
            alert("El nombre y los apellidos no pueden contener números");

        }
    
    }

}

function eliminar( alumno ) {

    // Sacamos la fila del alumno
    var fila = alumno.parentNode.parentNode;

    // Eliminamos la fila
    fila.parentNode.removeChild(fila);

}