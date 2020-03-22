const numeros = [10,40,200,300,500]
console.log(Math.max(...numeros))


const Bebidas = [
    {bebida:"Coca-Cola", precio:800},
    {bebida:"Fanta", precio: 950},
    {bebida:"Pepsi", precio: 850},
    {bebida:"Sprite", precio: 750}
]

const Cervezas = [
    {cerveza:"Kustmann", precio: 1400},
    {cerveza:"Kross", precio: 1400},
    {cerveza:"Quilmes", precio:1000},
    {cerveza:"BadWaiser", precio: 1000}
]
const bebestibles = [
    {cerveza: 'Crital' },
    ...Bebidas, 
    ...Cervezas    
]

console.log(bebestibles)