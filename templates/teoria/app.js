function imprimir(alerta){
    
    // let mensaje = 'Alerta: ' + alerta.evento + ' de ' + alerta.lugar + 'Acción: '
    // if (alerta.nivel > 5 ) {
    //     mensaje = mensaje + 'Evacuar'
    // } else {
    //     mensaje = mensaje + 'Esperar'
    // }

    /* Uso de templates literals */
    mensaje = `Alerta ${alerta.evento} de ${alerta.lugar}. Acción ${alerta.nivel >  5? 'Evacuar ' : 'Esperar'}`
    console.log(mensaje)
}

imprimir({evento: 'Exploto el reactor' ,  lugar: 'Jupiter', nivel: 9})