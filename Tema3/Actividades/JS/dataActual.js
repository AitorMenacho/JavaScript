


setInterval(datos, 1000)

function datos(){

    var fecha     = new Date()
    var diaSemana = fecha.getDay()
    var dia       = fecha.getDate()
    var mes       = fecha.getMonth()
    var anno      = fecha.getFullYear()

    var hora      = fecha.getHours()
    var minutos   = fecha.getMinutes()
    var segundos  = fecha.getSeconds()

    var sufijo

    if(  diaSemana == 1 ) diaSemana = 'Lunes'
    if(  diaSemana == 2 ) diaSemana = 'Martes'
    if(  diaSemana == 3 ) diaSemana = 'Miercoles'
    if(  diaSemana == 4 ) diaSemana = 'Jueves'
    if(  diaSemana == 5 ) diaSemana = 'Viernes'
    if(  diaSemana == 6 ) diaSemana = 'Sabado'
    if(  diaSemana == 7 ) diaSemana = 'Domingo'

    if( mes == 1 )  mes = 'Enero'
    if( mes == 2 )  mes = 'Febrero'
    if( mes == 3 )  mes = 'Marzo'
    if( mes == 4 )  mes = 'Abril'
    if( mes == 5 )  mes = 'Mayo'
    if( mes == 6 )  mes = 'Junio'
    if( mes == 7 )  mes = 'Julio'
    if( mes == 8 )  mes = 'Agosto'
    if( mes == 9 )  mes = 'Septiembre'
    if( mes == 10 ) mes = 'Octubre'
    if( mes == 11 ) mes = 'Noviembre'
    if( mes == 12 ) mes = 'Diciembre'

    hora < 12 ? sufijo = 'AM' : sufijo = 'PM'

    document.getElementById('fecha').innerHTML = 'Hoy es ' + diaSemana + ' ' + dia + ' de ' + mes + ' del ' + anno
    document.getElementById('hora').innerHTML  = 'Hora local: ' + hora + ":" + minutos + ":" + segundos + ' ' + sufijo

}
