const lista = [
    {nombre: 'Ricardo', apellido:'Macario'},
    {nombre: 'Daniel', apellido: 'Macario'}
]

function getNombreYApellido(){
    return ['Ricardo', 'Macario']
}

const [nombre, apellido, segundoNombre='Andres'] = getNombreYApellido()
console.log(nombre, apellido, segundoNombre)
