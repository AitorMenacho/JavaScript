window.onload = ini

var x = 0

function ini() {
    document.getElementById("annadir").addEventListener("click", agregar);
}

function agregar() {

    x++

    var nombre      = document.getElementById("nombre").value;
    var apellidos   = document.getElementById("apellidos").value;
    var email       = document.getElementById("email").value;
    var telefono    = document.getElementById("telefono").value;
    var marca       = document.getElementById("marca").value;
    var modelo      = document.getElementById("modelo").value;
    var fabricacion = document.getElementById("fabricacion").value;
    var kms         = document.getElementById("kms").value;
    var entrega     = document.getElementById("entrega").value;

    if(nombre == "" || apellidos == "" || email == "" || telefono == "" || marca == "" || modelo == "" || fabricacion == "" || kms == "" || entrega == "") {
        
        alert("Rellena todos los campos");
    
    } else {

        if( validaNombre( nombre ) && validaNombre( apellidos ) && validaCorreo( email ) && validaTelefono( telefono ) && validaKlm( kms ) 
            && validaNombre( marca ) && validaNombre( modelo ) ){

            var tabla     = document.getElementById("solicitudes");
            var fila      = document.createElement("tr");
            var columna1  = document.createElement("td");
            var columna2  = document.createElement("td");
            var columna3  = document.createElement("td");
            var columna4  = document.createElement("td");
            var columna5  = document.createElement("td");
            var columna6  = document.createElement("td");
            var columna7  = document.createElement("td");
            var columna8  = document.createElement("td");
            var columna9  = document.createElement("td");
            var columna10 = document.createElement("td");
            var columna11 = document.createElement("td");

            tabla.appendChild(fila);
            fila.appendChild(columna1);
            columna1.innerHTML = x;
            fila.appendChild(columna2);
            columna2.innerHTML = nombre;
            fila.appendChild(columna3);
            columna3.innerHTML = apellidos;
            fila.appendChild(columna4);
            columna4.innerHTML = email;
            fila.appendChild(columna5);
            columna5.innerHTML = telefono;
            fila.appendChild(columna6);
            columna6.innerHTML = marca;
            fila.appendChild(columna7);
            columna7.innerHTML = modelo;
            fila.appendChild(columna8);
            columna8.innerHTML = fabricacion;
            fila.appendChild(columna9);
            columna9.innerHTML = kms;
            fila.appendChild(columna10);
            columna10.innerHTML = entrega;
            fila.appendChild(columna11);
            columna11.innerHTML = "<button onclick='eliminar(this)'>Eliminar</button>";

        } else {

            return false

        }


    }

}

function validaNombre( nombre ) {

    var pattern = new RegExp("^[a-zA-Z áéíóúÁÉÍÓÚª]+$");

    if( pattern.test( nombre ) ) {
    
        return true;
    
    } else {

        alert( nombre + " no es correcto");

        return false;
    
    }

}

function validaCorreo( email ) {

    var patternCorreo = new RegExp("^([a-zA-Z0-9]+)@([a-z]{2,10}).([a-z]{2,4})$")

    if( patternCorreo.test( email ) ) {
    
        return true;
    
    } else {

        alert( "El correo " + email + " no es correcto");

        return false;
    
    }

}

function validaKlm( kms ) {

    var patternKms = new RegExp("^([0-9]+)(.[0-9]+)?$")

    if( patternKms.test( kms ) ) {
    
        return true;
    
    } else {

        alert( "Los kilometros: " + kms + " no son correctos");

        return false;
    
    }

}

function validaTelefono( telefono ) {

    var patternTelefono = new RegExp("^[0-9]{9}$")

    if( patternTelefono.test( telefono ) ) {
    
        return true;
    
    } else {

        alert( "El telefono: " + telefono + " no es correcto");

        return false;
    
    }

}

function eliminar( coche ) {
    
        var fila = coche.parentNode.parentNode;
        var tabla = fila.parentNode;
        tabla.removeChild(fila);
}