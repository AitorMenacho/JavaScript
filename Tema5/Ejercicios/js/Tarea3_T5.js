window.onload = iniciar

function iniciar() {

    document.getElementById('nombre').addEventListener("blur", nombreMay, false)
    document.getElementById('apellidos').addEventListener("blur", apellidoMay, false)
    document.getElementById('email').addEventListener("blur", matriculaMay, false)
    document.getElementById('enviar').addEventListener('click', confirmar, false)

}

function confirmar(eventopordefecto) {
    
    if( nombre() & apellido() & edad() & matricula() & provincia() & confirm( "¿Deseas enviar el formulario?" )){

        return true

    } else {

        eventopordefecto.preventDefault()
        return false

    }

}

function nombreMay() {
    
    var nombre = document.getElementById('nombre')
    nombre.value = nombre.value.toUpperCase()

}

function apellidoMay() {
    
    var apellidos = document.getElementById('apellidos')
    apellidos.value = apellidos.value.toUpperCase()

}

function matriculaMay() {
    
    var matricula = document.getElementById('email')
    matricula.value = matricula.value.toUpperCase()

}

function nombre() {

    var nombre = document.getElementById('nombre')
    var patron = /^[a-zA-Z áéíóúÁÉÍÓÚºª]{3,15}$/

    if (nombre.value.length != 0) {

        if (nombre.value.length <= 3 || nombre.value.length >= 20) {

            document.getElementById('errores').innerHTML = 'ERROR: longitud del nombre incorrecta'
            document.getElementById('nombre').focus()

        } else {

            if (patron.test(nombre.value)) {

                return true

            } else {

                document.getElementById('errores').innerHTML = 'ERROR: NOMBRE no puede contener números'
                document.getElementById('nombre').focus()

            }

        }

    } else {

        document.getElementById('nombre').focus()
        document.getElementById('errores').innerHTML = 'ERROR: NOMBRE no puede estar vacio'

        return false

    }

}

function apellido() {

    var apellidos = document.getElementById('apellidos')
    var patron = /^[a-zA-Z áéíóúÁÉÍÓÚñÑ]+$/

    if (apellidos.value.length != 0) {

        if (apellidos.value.length <= 10 || apellidos.value.length >= 30) {

            document.getElementById('errores').innerHTML = 'ERROR: longitud del apellidos incorrecta'
            document.getElementById('apellidos').focus()

        } else {

            if (patron.test(apellidos.value)) {

                return true

            } else {

                document.getElementById('errores').innerHTML = 'ERROR: El apellido no puede contener números'
                document.getElementById('apellidos').focus()

            }

        }

    } else {

        document.getElementById('errores').innerHTML = 'ERROR: APELLIDO no puede estar vacio'
        document.getElementById('apellidos').focus()

    }

    apellidos.value = apellidos.value.toUpperCase()

}

function edad() {

    var edad = document.getElementById('edad')

    var patron = /^[0-9]{2}$/

    if( edad.value != 0 ){

        if ( patron.test(edad.value) && edad.value < 18 || patron.test(edad.value) && edad.value > 85) {
    
            document.getElementById('errores').innerHTML = 'ERROR: EDAD incorrecta'
            document.getElementById('edad').focus()
    
        } else {
    
            return true
    
        }

    } else {

        document.getElementById('errores').innerHTML = 'ERROR: EDAD incorrecta'
        document.getElementById('edad').focus()

    }

}

function matricula() {

    var matricula = document.getElementById('email')

    var patron = /^[0-9]{4}[a-zA-Z]{3}$/

    if (matricula.value.length != 0) {

        if (patron.test(matricula.value)) {

            return true

        } else {

            document.getElementById('errores').innerHTML = 'ERROR: La matrícula debe tener 4 números y 3 letras'
            document.getElementById('email').focus()

        }

    } else {

        document.getElementById('errores').innerHTML = 'ERROR: La matrícula debe tener 4 números y 3 letras'
        document.getElementById('email').focus()

    }
}

function provincia() {
    
    var provincia = document.getElementById('provincia').value

    if( provincia == 0 ){
 
        document.getElementById('errores').innerHTML = 'ERROR: Debe seleccionar una provincia'
        document.getElementById('provincia').focus()

    } else {

        return true

    }

}