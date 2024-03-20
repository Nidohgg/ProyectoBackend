
const operaraciones=(a, b, fnCallBackOperacion)=>{
    if(typeof a!="number" || typeof b!="number"){
        return fnCallBackOperacion( new Error("Solo se aceptan argumentos numericos...!!"))
    }
    return fnCallBackOperacion(null, a,b);
}

//(5x4 + 3*2 )/10 + 100 = 102.6)

let resultado = operaraciones(100, 0, (error, a, b) => {
    return operaraciones(10, 0, (error, a, b)=>{
        return operaraciones(3, 2, (error, a, b) =>{
            return operaraciones(5, 4, (error, a, b)=>{
                return a*b;
            })+ a*b
        }) / a;
    }) + a;
})

console.log({resultado});