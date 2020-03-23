const nombre = 'Ricardo';
const profesion = 'Programador';
const libroFavorito = 'Antifragil';
const editorial = 'Random House';

const persona = {
    nombre,
    profesion,
    libroFavorito,
    [`${editorial} - ${libroFavorito}`]: libroFavorito,
    //En ES6 ya no es necesario escribir function()
    leer (){
        console.log('leyendo...')
    }
}
console.log(persona)