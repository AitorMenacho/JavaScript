window.onload = mensaje

function mensaje(){
    
    var seleccion = document.getElementById('buscador');
    seleccion.addEventListener("change", alerta, false);

}

function alerta(){

    var seleccion = document.getElementById('buscador').value;
    alert("Has seleccionado la opción " + seleccion);

}