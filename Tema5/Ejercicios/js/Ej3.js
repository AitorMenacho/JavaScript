window.onload = iniciar

function iniciar() {
    
    document.getElementById('boton').addEventListener('click', irse, false)

}

function irse() {
    
    var nombre = document.getElementById("nombre").value;
    
    alert("Hola " + nombre + ", te vas a ir al colegio");

}