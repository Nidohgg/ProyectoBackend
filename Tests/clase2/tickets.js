
class TicketManager {

    #eventos;
    #precioBaseGanacia;

    constructor(){
        this.#eventos= [];
        this.#precioBaseGanacia = 0.15; //es el valor que dice la consigna de la clase 2
    }

    getEventos(){//imprime lo que este guardado en el array eventos
        console.log(this.#eventos);
    }

    agregarEvento(nombre, lugar, precio, capacidad = 50){
        const evento = {
            id:this.#eventos.length+1,//comienza en uno ya que se le suma uno al array vacio 
            nombre,
            lugar,
            precio,
            capacidad,
            fecha: new Date(),
            participantes : []
        }

    }
}