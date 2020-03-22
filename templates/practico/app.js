const ordenes = [
    {bebida:"Coca-Cola", precio: 100},
    {bebida:"Fanta", precio: 200},
    {bebida:"Pepsi", precio: 150},
    {bebida:"Sprite", precio: 322}
]

function render(ordenes) {
    const html = `
        <div>
            <h1>Factura</h1>
            <ul>
                ${ordenes.map((orden)=> `<li>${orden.bebida}</li>`).join('')}
            </ul>
            <h4>El total es : 
                ${ordenes.reduce((total,orden)=> total + orden.precio, 0)}
            </h4>
        </div>
    `

    document.body.innerHTML = html ;
}

render(ordenes);