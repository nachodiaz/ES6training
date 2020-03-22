function requireArgumento(nombreArgumento){
    throw new Error(`Falta el argumento: ${nombreArgumento}`)
}

function agregarDiv(
    destino = document.body,
    nombre = requireArgumento('nombre'),
    apellido = requireArgumento('apellido'),
    nombreCompleto =  `${nombre} ${apellido}`

    ){
    const nuevoDiv = document.createElement('div')
    nuevoDiv.id = 'Nuevo'
    nuevoDiv.innerText = nombreCompleto
    destino.appendChild(nuevoDiv)
}

agregarDiv(undefined, 'Nacho', 'Díaz')
