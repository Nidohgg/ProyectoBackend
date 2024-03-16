const productos = [
    {
        manzanas:3,
        peras: 2,
        carne: 1,
        juegos: 5,
        dulces: 2,
    },
    {
        manzanas: 1,
        sandias: 1,
        huevos: 6,
        jugos: 1,
        panes: 4
    }
]

const tipos = [];

productos.forEach((value) => {
    const typeProduct = Object.keys(value);
    
    typeProduct.forEach((item) =>{
        if(!tipos.includes(item)){//si esto es falso...
            tipos.push(item)
        }
    })
});

console.log(tipos);

const cantidadTotal = [];

productos.forEach((value) => {
    const valueProduct = Object.values(value);

    valueProduct.forEach((item) => {
        cantidadTotal.push(item);
    })
});

const sumaTotal = cantidadTotal.reduce((acumulador, value)=> acumulador+value);
console.log(sumaTotal);