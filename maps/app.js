const equipo = {
    9 : {nombre: 'Eduardo Vargas', goles:  4},
    7  : {nombre: 'Alexis Sanchez', goles: 5},
    22  : {nombre: 'Arturo Vidal Messi', goles: 10}
}
const map = new Map([
    [9 , {nombre: 'Eduardo Vargas', goles:  4}],
    [7 , {nombre: 'Alexis Sanchez', goles: 5},],
    [22 , {nombre: 'Arturo Vidal Messi', goles: 10}]
])

map
    .set(15, {nombre: 'Mauricio Pinilla', goles:  12})
    .set(2, {nombre: 'Matías Rodriguez', goles: 9})

console.log([...map])

//Primer Problema
/*
equipo.__proto__.error = 'Hubo un error!' 

for(numero in equipo){
    console.log(numero)
}

console.log(equipo) */