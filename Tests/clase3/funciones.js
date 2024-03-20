function suma(a, b){
    return a+b;
}

const sumaFlecha = (a, b) => {
    console.log('ejecutando suma');
    
    return a+b;
}

const sumaFlecha2 =(a,b) => a+b //return implicito/ sin {}
const cuadrado= (a) => a*a;//sin () para los argumentos 

console.log('Resutado funcion suma \"tradicional\":', suma(4,3));
console.log('resultado funcion flecha:', sumaFlecha(4,3));
console.log('Resultado funcion flecha (sintaxis abreviada):', sumaFlecha2(6,6));
console.log('Resultado funcion flecha (sintaxis minima):', cuadrado(6,3));
