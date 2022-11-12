function cambiarColor1() {
    
    var caja = document.getElementById("caja1");
    var color = document.getElementById("caja1").style.backgroundColor;

    caja.addEventListener("onmouseover", cambiaBoton(color), false);

}

function cambiarColor2() {
    
    var caja = document.getElementById("caja2");
    var color = document.getElementById("caja2").style.backgroundColor;

    caja.addEventListener("onmouseover", cambiaBoton(color), false);

}

function cambiarColor3() {
    
    var caja = document.getElementById("caja3");
    var color = document.getElementById("caja3").style.backgroundColor;
    
    caja.addEventListener("onmouseover", cambiaBoton(color), false);

}

function cambiarColor4() {
    
    var caja = document.getElementById("caja4");
    var color = document.getElementById("caja4").style.backgroundColor;
    
    caja.addEventListener("onmouseover", cambiaBoton(color), false);

}

function cambiaBoton(color) {

    var boton = document.getElementById("boton");
    boton.style.backgroundColor = color;
}