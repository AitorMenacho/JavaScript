window.onload = texto;

function texto() {
    
    var primero = document.getElementById("primero");

    primero.addEventListener("change", segundo, false)
    primero.addEventListener("change", tercero, false)

}

function segundo() {

    var primero = document.getElementById("primero").value;
    var segundo = document.getElementById("segundo");

    var texto = primero.toUpperCase();

    segundo.style.color = "red";

    segundo.value = texto;

}

function tercero() {

    var primero = document.getElementById("primero").value;
    var tercero = document.getElementById("tercero");

    var texto = primero.toLowerCase();

    tercero.style.color = "blue";

    tercero.value = texto;


}