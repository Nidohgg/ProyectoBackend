//ES7 ->
//COSAS QUE SE AGREGARON EN ESTA VERSION DE ECMASSCRIPT 7
//exponencial (**)
//includes -> arrays

//const valor1 = 5;
//console.log(5 * 5 * 5)
//console.log(5 ** 3);


//const nombres = ['Lautaro', 'Martin', 'Angel'];

//console.log(nombres.includes('Lautaro'));//true por que tiene mayuscula
//console.log(nombres.includes('lautaro'));//false por que todo minuscula


//ES8
//async - await 
//Object.entries(), Object.values(), Object.Keys

const estudiante1 ={
    nombre: 'Angel',
    apellido: 'Ramirez',
    edad: 20
}

/*
console.log(Object.entries(estudiante1));
console.log(Object.keys(estudiante1));//imprimiria las keys osea, nombre, apellido y edad
console.log(Object.values(estudiante1));//valores
*/


//ES9 
//


const direccionEstudiante1 = {
    ciudad: 'Buenos aires',
    barrio: 'San Nicolas',
    altura: 195
}

//spread, se usa para extrer datos concretos de un objeto (desestructurar), puedo extraer uno solo o varios
//const { apellido, nombre, edad } = estudiante1;
//console.log(apellido, nombre, edad);

const estudianteUnido = {...estudiante1, ...direccionEstudiante1}; //los '...' significa que esparce todas las propiedad de los dos objetos, spread

//console.log(estudianteUnido);


//operador rest-> restante o resto, excluye las propiedades que se desea
const {altura, ciudad, ...rest} = estudianteUnido;//en este caso excluye el dato de altura
console.log(rest);

//ES10
//trim() -> sirvd para valores del tipo string. 
//.flat() -> arrays
//dynamic Import

//trim() siver para eliminar espacios en las cadenas de texto 
const cadena = '   hello  world   ';

const eliminarEspacios = cadena.trim();
console.log({ eliminarEspacios });
/*
//.flat()
const numeros = [200, 555, 600, [51, 26, 64], 210, 654];
console.log(numeros);
console.log(numeros.flat());
*/

//ES11
//nullish -> colocar un valor por defecto
let estaLloviendo;

const llueve = estaLloviendo || 'esta lloviendo';

console.log({llueve});