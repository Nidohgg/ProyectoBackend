/*addEventListener("click", e=>{
    e.preventDefault();
})
*/

const { CLIENT_RENEG_LIMIT } = require("tls");

let numeros=[1,2,3,4,5];
let cuadrados=numeros.map(elemento => elemento**2);

console.log(numeros);
console.log(cuadrados);
console.table({numeros, cuadrados});

let miMap=(arreglo=[], fnCallBack) =>{
    let resultadoResultado=[];
    for(let i=0; i<numeros.length; i++){
        let resultado= fnCallBack(arreglo[i]);
        resultadoResultado.push(resultado);
    }
    return resultadoResultado;
}

cuadrados=miMap(numeros, elemento=>elemento**2)
console.log({cuadrados});

const operar=(a, b, fnCallBackOperacion)=>{
    if(typeof a!="number" || typeof b!="number"){
        throw new Error("Solo se aceptan argumentos numericos...!!")
    }
    return fnCallBackOperacion(a,b);
}

function sumar(a, b){
 
    return a+b;
}

console.log(operar(5,4, (a,b)=>a+b));
console.log(operar(5,4, (a,b)=>a-b));
console.log(operar(5,4, (a,b)=>a*b));
console.log(operar(5,4, (a,b)=>a/b));

//let resultado=operar(5, true, (a,b)=>a+b);
//console.log({resultado});
resultado=operaciones(5,"mateo", (error, a, b)=>{
    if(error){
        console.log(error.message);
    }
    return a+b;
})
console.log({resultado});

try{
    let resultado=operar(5, true, (a,b)=>a+b);
    console.log({resultado});
}catch(error){
    console.log(error.message);
}