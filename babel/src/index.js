class Orden {
    constructor(plato, precio){
        this.plato = plato ; 
        this.precio = precio ;
    }
}

const ordenes = [
    new Orden ('pasta', 100),
    new Orden('pizza', 150)
];

ordenes.map((orden) => 'orden')

const [pasta] = ordenes