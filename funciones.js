//console.log("primer paso");

/*function saludar(){
    console.log("segundo paso.");
    console.log("Hola mundo");
}
console.log("Tercer paso");

saludar();*/

//funcion flecha

const saludar2 = () => {
    console.log("Hello world");

}

console.log(saludar2());;

/*const sumar = (valor1, valor2) => {
    return valor1 + valor2;
}
const restar = (valor1, valor2) => {
    return valor1 - valor2;
}
const multiplicar = (valor1, valor2) => {
    return valor1 * valor2;
}
const dividir = (valor1, valor2) => {
    return valor1 / valor2;
}*/

//forma simplificcada de retonar los valores de las funciones
const sumar = (valor1, valor2) => valor1 + valor2;
const restar = (valor1, valor2) => valor1 - valor2;
const multiplicar = (valor1, valor2) => valor1 * valor2;
const dividir = (valor1, valor2) => valor1 / valor2;

console.log(sumar(56,25));
console.log(restar(56,25));
console.log(multiplicar(56,25));
console.log(dividir(56,25));