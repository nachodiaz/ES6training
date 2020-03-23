let bolsa = new Set(['fresas','mandarinas'])
bolsa.add('naranja')

bolsa
    .add('pera')
    .add('platano')
    .add('piña')
    .add('uva')
    .add('durazno')

    bolsa.add('limon')

    //for (let fruta of bolsa) {
    //    console.log(fruta)
    //}

    const arr = new Set([...bolsa].map((fruta,i) => `${i} - ${fruta}` ))

console.log(arr)