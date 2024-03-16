import Calculadora from "./calculadora.js";




const modo = 'calculo';

//dinamycImport ejemplo 

const ejemploImport = async () => {
    if(modo === 'calculo'){
        const {default: Calculadora} = await import('./calculadora.js');
        const c1 = new Calculadora();

        c1.sumar(5, 6);
        c1.restar(10, 5);
    }
}