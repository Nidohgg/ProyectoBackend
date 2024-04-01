//Primero para trabajar con ECMAscript descargar el package.Json 
//con el comando npm init -y 
//luego en el package.json agregar el ` "type": "module" `
//1
import Persona from "./Persona.js";

//(2)el AS se utiliza como "quiero que me exportes la f2 como 'suma' "
import {f1 as suma,f2 as resta, usuarios, Heroes} from "./varios.js"

//(3) Otro ejemplo de exportar con ecmascript
import * as varios from "./varios.js"

//(1)
let persona01= new Persona;
console.log(persona01.saludo());

//(2)
console.log(usuarios);
console.log(suma(7,6));
//(2)
let heroes01= new Heroes("Robin", "R.tapia")
console.log(heroes01.verIdentidad());

//(3)
console.log(varios.f1(6,6));

let heroes02=new varios.Heroes("Batman", "Bruce Wayne")