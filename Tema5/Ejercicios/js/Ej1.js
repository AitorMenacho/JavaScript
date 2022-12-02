window.onload = iniciar

function iniciar() {
    
    document.getElementById('texto').addEventListener('blur', mayuscula, false)

}

function mayuscula() {
    
    var cadena = document.getElementById("texto").value;
    var cadena = cadena.toUpperCase();
    document.getElementById("texto").value = cadena;

}