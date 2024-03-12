//clases

class Persona {
    constructor(nombre){
        this.nombre = nombre;
    }
    static especie = "humano";
    
    saludar = () =>{
        console.log(`¡Hola, soy ${this.nombre}, mucho gusto!`);
    }

    getEspecie = () => {
        console.log(`Soy un ${Persona.especie}`);
    }
}

let persona1 = new Persona("Emanuel");
let persona2 = new Persona("Ricardo");

persona1.saludar();
persona2.saludar();

persona1.getEspecie();
persona2.getEspecie();