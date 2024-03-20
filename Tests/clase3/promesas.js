const { error } = require("console");

const suma =(a,b)=>{
    return new Promise((res, rej)=>{
        
        if(typeof a!="number" || typeof b!="number"){
            return rej( new Error("Solo se aceptan argumentos numericos...!!"))
        }
        res(a+b);
    })
}

//console.log(suma(3,5));//esto devolveria un objeto "todavia no es"
suma(3,5)
    .then(res=>console.log(res))//tambien se le puede sumar al res cualquier dato
    .catch(error=>console.log(error.message))//catch atrsapa el error de la promesa
    .finally(()=>console.log("Operaciones de cierre..."))

suma("martin",5)
    .then(res=>console.log(res))
    .catch(error=>console.log(error.message));

