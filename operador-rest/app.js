function cobrarTicket(precio, ...clientes){
    // JAVASCRIPT VS ES6 
    
    /* const precio = arguments[0]
    const clientes = Array.prototype.slice.call(arguments,1) */

    clientes.forEach((clientes)=>{
        console.log(`${clientes} pago ${precio}`)
    }) 
}

cobrarTicket(100, 'Ricardo', 'Daniel', 'Diego', 'Nacho')