//EJEMPLOS DE EXPORTAR FUNCIONES CON MODULE

const Persona=require("./Persona")
const varios= require("./varios")
const suma = require("./varios").f1
const resta= require("./varios").f2

const {f1, usuarios:users}= require("./varios")


const fs=require("fs")
//fs.promises.writeFile
const fsConPromesas=require("fs").promises

const path=require("path")
const {join}= require("path")//join junta distinta ruta de caracteres y las junta para formar una ruta

//let rutaArchivo = "./archivo/file.txt" => es una ruta 
let rutaArchivo=join(__dirname, "archivos", "file.txt") //=> es buena practica, se utiliza ruta absoluta

fsConPromesas.writeFile(rutaArchivo, "Buenas tardes!!")
    .then(()=>console.log("Archivo creado!!!"))


let persona01=new Persona("Juan", "Gonzalez")
console.log(persona01.saludo());

console.log(varios.f1(5,5));
console.log(varios.usuarios);

let heroe01= new varios.Heroes("Superman", "Clark Kent")
console.log(heroe01.verIdentidad());

console.log(suma(6,4));
console.log(resta(20,24));

console.log(users);