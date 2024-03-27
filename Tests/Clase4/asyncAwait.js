const suma = (a,b)=>{
    return new Promise((res, rej) =>{
        if (typeof a != "number" || typeof b != "number") {
            rej(new Error("Solo se admiten argumentos numericos!!"))
        }
        res(a + b);
    })
}


const multiplica = (a, b) => {
    return new Promise((res, rej)=>{
        if (typeof a != "number" || typeof b != "number") {
            rej(new Error("Solo se admiten argumentos numericos"))
        }
        res(a* b);
    })
}



const entorno= async()=>{//con la palabra reservada ASYNC la funcion pasa a ser asincrona
    let resFinal

    try {//si puede fallar lo meto dentro de un try catch
        let res1=await multiplica(5,2);
        let res2= await multiplica(3,2);
        resFinal= await suma(res1, res2);
    } catch (error) {
        console.log(error.message);
        return
    }

    console.log(resFinal);
}

entorno()

async function app2 (){

}

const app3 = async function(){
    return "hola, buen dia"
}

app3().then(res=>console.log(res));