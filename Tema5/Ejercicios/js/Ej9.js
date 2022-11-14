function cambiarFoto1() {
    
    var cuadro = document.getElementById("imagen1");
    var enlace = document.getElementById("imagen1").attributes.src;

    cuadro.addEventListener("onmouseover", cambiaBoton(enlace), false);

}

function cambiarFoto2() {
    
    var cuadro = document.getElementById("imagen2");
    var enlace = document.getElementById("imagen2").attributes.src;

    cuadro.addEventListener("onmouseover", cambiaBoton(enlace), false);

}

function cambiarFoto3() {
    
    var cuadro = document.getElementById("imagen3");
    var enlace = document.getElementById("imagen3").attributes.src;
    
    cuadro.addEventListener("onmouseover", cambiaBoton(enlace), false);

}

function cambiarFoto4() {
    
    var cuadro = document.getElementById("imagen4");
    var enlace = document.getElementById("imagen4").attributes.src;
    
    cuadro.addEventListener("onmouseover", cambiaBoton(enlace), false);

}

function cambiaBoton(foto) {

    var fotoGrande = document.getElementById("fotoGrande");
    fotoGrande.src = foto.value
}