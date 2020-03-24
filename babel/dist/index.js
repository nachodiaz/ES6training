'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Orden = function Orden(plato, precio) {
    _classCallCheck(this, Orden);

    this.plato = plato;
    this.precio = precio;
};

var ordenes = [new Orden('pasta', 100), new Orden('pizza', 150)];

ordenes.map(function (orden) {
    return 'orden';
});

var pasta = ordenes[0];