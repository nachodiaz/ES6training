const Persona = {
    nombre: 'Nacho',
    edad: 30,
    informacion: {
        deportes: ['futbol', 'basquetbol'],
        profesion: 'Técnico en diseño y desarollo web'
    }
};

function entrenar({nombre, deporte}){
    console.log(`${nombre} esta haciendo ${deporte}`)
}

entrenar({nombre: 'Ricardo', deporte:'Fútbol'})