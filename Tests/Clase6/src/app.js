/*const express=require("express");

const PORT=3000;

const app = express()


let usuarios=[
    {
        "id":1,
        "nombre":"Pedro"
    },
    {
        "id": 2,
        "nombre":"Thomas"
    }
]


//Definir rutas en express

app.get("/", (req, res)=>{

    res.send("Pagina Principal")
})

//otra ruta
app.get("/usuarios", (req, res)=>{

    //res.send("Pagina de usuarios, prueba con EXPRESS")
    res.json(usuarios);//se usa el formato JSON por que es un objeto
})


app.get("/usuarios/:id", (req, res)=>{

    let id=req.params.id
    console.log(id, typeof id);
    id=Number(id)

    if (isNaN(id)) {
        return res.json({error:"Ingrese un id numerico"})
    }

    let usuario=usuarios.find(user=>user.id===id)
    if (usuario) {
        res.json(usuario)
    } else {
        res.json({error:`NO existe el usuario con el id ${id}`})
    }
})

app.get("/usuarios/nombre/:nombre", (req, res)=>{

    let nombre=req.params.nombre

    let usuario=usuarios.find(user=>user.nombre.toLowerCase()===nombre.toLowerCase())
    
    if (usuario) {
        res.json(usuario)
    } else {
        res.json({error:`NO existe el usuario con el nombre ${nombre}`})
    }
})

app.listen(PORT, ()=>console.log(`Server online en puerto ${PORT}`))

*/