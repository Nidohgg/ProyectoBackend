const { log } = require("console");
const fs =require("fs");
const path = require('path');

let rutaArchivo = path.resolve(__dirname, '../Clase4/archivos/ArchivoPromesa.txt');
let textoPrueba = `esto es un texto de prueba para archivos..`

//todo lo retorne dentro de un then es una promesa
/*fs.promises.writeFile(rutaArchivo, textoPrueba)//writeFile devuelve una promesa
    .then(()=>{
        console.log("Archivo guardado..!!");

        return fs.promises.readFile(rutaArchivo, {encoding:"utf-8"})

    })
    .then((archivoLeido)=>{
        console.log(archivoLeido);


    })
    .catch(error=>console.log(error.message))
*/
//Ejemplo 2

const app=async()=>{
    await fs.promises.writeFile(rutaArchivo, textoPrueba)
    console.log("Archivo guardado!!");

    let leeArchivo =await fs.promises.readFile(rutaArchivo, {encoding:"utf-8"})
    console.log(leeArchivo);

    await fs.promises.appendFile(rutaArchivo, "\n\n Firma: Emanuel Torres")
    console.log("Archivo modificado!!");

    setTimeout(async() => {
        await fs.promises.unlink(rutaArchivo)
        console.log("archivo eliminado")
    },300)
}

app();