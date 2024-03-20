const { ifError } = require("assert");
const { error } = require("console");
const fs=require("fs")

//Operacion sincronica
const operacion3=()=>{
    console.log("Porcesando datos operacion 3...");
    let fecha1 = Date.now();
    while(Date.now() - fecha1 < 2000){//demora de 2mil milisegundos

    }
    return "Operacion 3";
}
/*
console.log("Inicio");
console.log("Operacion 1");
console.log("Operacion 2");
console.log(operacion3());
console.log("Fin");
*/

console.log("Inicio 2");
//Operacion ASINCRONICA
fs.writeFile("./archivo.txt", "texto de prueba...", (error)=>{
    if(error){
        console.log("Se produjo un error... :(", error.message);
    }
    console.log("Archivo guardado exitosamente");
})

setTimeout(() =>{
    console.log("Impresion a 2 seg.");
}, 2000);

setTimeout(() =>{
    console.log("Impresion a 0 seg.");
}, 0);

operacion3();
console.log("FIN");