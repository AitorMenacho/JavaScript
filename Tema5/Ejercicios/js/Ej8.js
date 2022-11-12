function muestraTexto() {
    
    var texto = document.getElementById('texto').value
    var caja  = document.getElementById('muestra')

    caja.innerHTML = texto;

}

function escodeTexto() {
    
    var caja  = document.getElementById('muestra')

    caja.innerHTML = '';

}