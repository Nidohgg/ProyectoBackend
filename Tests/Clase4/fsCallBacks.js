const { error } = require("console");
const fs=require("fs")
const path = require('path');

let rutaArchivo = path.resolve(__dirname, '../Clase4/archivos/archivoCallBacks.txt');
let text2=`Texto de prueba con fileSistem con call back`

fs.writeFile(rutaArchivo, text2, (error)=>{
    if(error){
        console.log(error.message);
        return 
    }

    console.log("archivo guardado!!");
})

fs.readFile(rutaArchivo, {encoding: "utf-8"}, (error, leoArchivo)=>{
    if(error){
        console.log(error.message);
        return
    }
    console.log(leoArchivo);
})

fs.appendFile(rutaArchivo, "\n\n\t FIRMA: Michael Jackson", (error) =>{
    if(error){
        console.log(error.message);
        return
    }
    console.log("Archivo modificado");
})

setTimeout(()=>{
    fs.unlink(rutaArchivo, (error)=>{
        if (error) {
            console.log(error.message);
            return;
        }
        console.log("Archivo eliminado...!!");
    })
}, 3000);