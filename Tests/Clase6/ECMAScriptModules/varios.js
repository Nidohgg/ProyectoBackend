//Se le agrega el export frente de la funcion
//o se puede exportar todo en una linea de codigo

export const usuarios=[
    {
        id: 1,
        nombre: `ricardo`
    },
    {
        id: 2,
        nombre: `Lucia`
    },
    {
        id:3,
        nombre:`Victoria`
    }
]

export const f1=(a,b)=>{
    return a+b;}

export const f2=(a,b)=>{
    return a-b;
}

export class Heroes{
    constructor(nombre, alias){
        this.nombre=nombre;
        this.alias=alias;
    }

    verIdentidad(){
        return `La identidad de ${this.nombre} es: ${this.alias}`
    }
}