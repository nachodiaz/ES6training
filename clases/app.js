function VehiculoProto (marca, numeroDellantas){
    this.marca = marca ; 
    this.numeroDellantas = numeroDellantas ;
   
}

VehiculoProto.prototype.maximaVelocidad = 100 ;


VehiculoProto.prototype.acelerar = function() {
    console.log(`Acelero con mis ${this.numeroDellantas} llantas.`)
}
const carro = new VehiculoProto('mazda', 4);
const carroToyota = new VehiculoProto('Toyota', 4);


class Vehiculo {
    constructor(marca, numeroDellantas) {
        this.marca = marca ; 
        this.numeroDellantas = numeroDellantas ;
    }

    acelerar(){
        console.log(`Acelero con mis ${this.numeroDellantas} llantas.`)
    }
}

Vehiculo.prototype.maximaVelocidad = 100 ;

class Moto extends Vehiculo {
    constructor (marca){
        super(marca, 2)
    }
    saltar () {
        console.log('Como soy una moto puedo saltar')
    }
}


const vehiculo = new Vehiculo('Lada', 4)
const motoClase = new Moto('Dukati')

console.log(vehiculo)
console.log(motoClase)

