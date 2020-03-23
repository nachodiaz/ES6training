const persona = { nombre: 'Ricardo', edad: 26}
const ingeniero = {
    profesion: 'ingeniero',
    especialidad: 'frontend',
    sueldo:100,
    año:2005
}
const preferencias = {
    hobby: 'crossfit',
    libro: 'antifragil'
}
// El poder el Object Assing
const empleado = Object.assign({}, persona, ingeniero, preferencias)

// Object.keys(persona).forEach(
//     (propiedad) => empleado[propiedad] = persona[propiedad]
// )

// Object.keys(ingeniero).forEach(
//     (propiedad) => empleado[propiedad] = ingeniero[propiedad]
// )

console.log(empleado)