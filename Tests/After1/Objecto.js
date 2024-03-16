const Estudiante = require("./claseEjemplo.js");


/*
const estudiante1 = {
    nombre: 'Angel',
    apellido: 'Correa',
    fechaNacimiento: '2003-08-26',//yyyy-mm-dd
    estaBecado:true,
    obtenerEdad: function (){

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
}
*/

const curso1 = [{ javascript: 7,}, {react: 8,}, {backend: null}];

const curso2 = [{ javascript: 7,}, {backend: null}];

const estudiante1 = new Estudiante('Angel', 'Correa', '2000-03-01', curso1, false);

const estudiante2 = new Estudiante('Tomas','Gonzalez', '2000-03-01', curso2, false);

console.log(estudiante1.datosEstudiante());
console.log(estudiante2.datosEstudiante());


