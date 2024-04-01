const usuarios=[
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

const f1=(a,b)=>{
    return a+b;}

const f2=(a,b)=>{
    return a-b;
}

class Heroes{
    constructor(nombre, alias){
        this.nombre=nombre;
        this.alias=alias;
    }

    verIdentidad(){
        return `La identidad de ${this.nombre} es: ${this.alias}`
    }
}

module.exports={Heroes, f1, f2, usuarios}