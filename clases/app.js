function Vehiculo (marca, numeroDeLlantas) {
    this.marca = marca ;
    this.numeroDeLlantas = numeroDeLlantas ;
}

Vehiculo.prototype.acelerar = function () {
    console.log(`Acelero con mis ${this.numeroDeLlantas} llantas.`)
}