const fs = require("fs");
const path = require('path');
const crypto=require("crypto");

class UserManager{

    constructor(rutaArchivo){
        this.path=rutaArchivo;
    }

    async getUsuario(){
        if(fs.existsSync(this.path)){//si el archivo existe...
            return JSON.parse(await fs.promises.readFile(this.path, {encoding:"utf-8"}))//leer el archivo- esperar a que se resuelva la promesa
        }else{
            return [];//Si no existe devuelve un array vacio
        }
    }
}//fin class


//console.log(userManager.getUsuario());//=> Promise { [] }

//Opcion uno con then, no es lo mejor
//userManager.getUsuario().then(datos=>console.log(datos));

const entorno=async()=>{
    let userManager=new UserManager(path.resolve(__dirname, '../Clase5/data/usuarios.json'));
    
    //se agrega el try y el catch por que como es asincrono es propensa a errores 
    try{
        console.log(await userManager.getUsuario());// devuelve => el array vacio [] sin la promesa
    } catch (error){
        console.log(error.message)
        return
    }
    
}

entorno();