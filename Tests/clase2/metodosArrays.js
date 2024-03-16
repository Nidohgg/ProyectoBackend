//map()

const numeros = [3, 4, 5, 6];

const numerosDobles = numeros.map((value) => {
    return value + value;
})

console.log(numerosDobles);

//push()

numeros.push(10);
console.log(numeros);

//find()

const buscar = numeros.find((value) =>{
    if(value === 4){
        return value;
    }
})
console.log(buscar);

//reducer()
const total = numeros.reduce((acumulador, value)=> acumulador + value);
console.log(total);