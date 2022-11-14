function cambiaFuente() {
    
    var fuente = document.getElementById('fuente').value
    
    document.getElementById('texto').style.fontFamily = fuente;

}

function cambiaEstilo() {
    
    var estilo = document.getElementById('estilo').value
    
    document.getElementById('texto').style.fontStyle = estilo;

}

function cambiaColor() {
    
    var color = document.getElementById('color').value
    
    document.getElementById('texto').style.color = color;

}

function cambiaTamanno() {
    
    var tamanno = document.getElementById('tamano').value
    var tipo = document.getElementById('tipo').value
    
    document.getElementById('texto').style.fontSize = tamanno + tipo;

}