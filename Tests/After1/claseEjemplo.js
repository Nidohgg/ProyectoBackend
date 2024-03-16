class Estudiante{
 
    //atributos
    nombre;
    apellido;
    fechaNacimiento;
    cursos;
    estaBecado;

    //constructor
    constructor(nombre, apellido, fechaNacimiento, cursos, estaBecado){

        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNacimiento = fechaNacimiento;;
        this.cursos = cursos;
        this.estaBecado = estaBecado;
    }

    //metodos
    obtenerEdad(){
        const fechaNacimientoObj = new Date(this.fechaNacimiento);
    
        //se le suma 3 horas por el UTC, ya que estamos en argentina
        fechaNacimientoObj.setHours(fechaNacimientoObj.getHours() + 3);
        let fechaActual = new Date();
        //se le resta 3 horas por el UTC, ya que estamos en argentina
        fechaActual.setHours(fechaActual.getHours() - 3);
    
    
        //Obtener el dia y el mes de la fecha de nacimiento 
        let diaNacimiento = fechaNacimientoObj.getDate();
        let mesNacimiento = fechaNacimientoObj.getMonth() + 1;//devuelve el mes del 0-11 por eso se le suma 1
    
        //obtener el dia y el mes e la fecha actual
        let diaActual = fechaActual.getDate();
        let mesActual = fechaActual.getMonth() + 1; //devuelve el mes 0-11 por eso se le suma 1
    
        //Calcular la edad 
        let edad = fechaActual.getFullYear() - fechaNacimientoObj.getFullYear();
    
        //Ajustar la edad si el mes actual es antes del mes de nacimiento,
        //o si es el mismo mes pero el dia actual es antes del dia de nacimiento
        if (mesActual < mesNacimiento || (mesActual === mesNacimiento && diaActual < diaNacimiento))
            --edad;
    
        return edad;
    
    }

    datosEstudiante() {//imprime todods los datos del estudiante
        const datos = `
        Nombre: ${this.nombre}
        Apellido: ${this.apellido}
        Edad: ${this.obtenerEdad()}
        `
        return datos;
    }
}

module.exports = Estudiante;