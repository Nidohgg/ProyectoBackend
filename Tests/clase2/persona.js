class Estudiante {
    //
    #nombre;
    #apellido;

    constructor(){
        this.#apellido = 'torres';
        this.#nombre = 'Emanuel';
    }

    //metodos
    #combinacionNombre(){//metodo privado #
        return `${this.#nombre} ${this.#apellido}`;
    }

    
    mostrarNombreCompleto(){//metodo publico
        console.log(this.#combinacionNombre());
    }

}

const estudiante = new Estudiante();
//se utiliza un metodo publico para llamar a un metodo privado, ya que si se lo llama directamente aparece error
estudiante.mostrarNombreCompleto();// Imprime el nombre completo
//console.log(estudiante.#combinacionNombre()); -> mostrara error por que se llama al metodo privado directamente
