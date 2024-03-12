

class Contador {
    
    //una clase tiene atributos
    //constructor
    // metodos

    static CONTADOR_GLOBAL = 0;

    constructor(responsable) {
        this.responsable = responsable;
        this.contadorResponsable = 0
    }

    //METODOS
    getResponsable() {
        return this.responsable;
    }

    contar() {
        this.contadorResponsable++;
        Contador.CONTADOR_GLOBAL++;
    }

    getCuentaIndividual() {
        return this.contadorResponsable;
    }

    getCuentaGlobal() {
        return Contador.CONTADOR_GLOBAL;
    }

}

module.exports = Contador;