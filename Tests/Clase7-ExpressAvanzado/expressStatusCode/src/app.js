import express from "express"

const PORT = 3001;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/', (req, res)=>{
    res.setHeader('Content-Type', 'text/plain');
    res.status(200).send('OK');
})

app.get("/acceso", (req,res)=>{
    let usuario=req.query.usuario
    let passsword= req.query.passsword

    if (!usuario || !passsword) {
        res.setHeader('Content-Type', 'aplication/json');
        return res.status(400).json({error: `Complete usuario y contraseña`})
    }

    if (usuario!= "admin" || passsword!== "CoderCoder") {
        res.setHeader('Content-Type', 'aplication/json');
        return res.status(401).json({error: `Credenciales invalidas`})
    }

    res.setHeader('Content-Type', 'application/json');
    return res.status(200).json({payload:"Acceso concedido...!!!"})
})

app.get('*', (req, res)=>{
    res.setHeader('Content-Type', 'aplication/json');
    res.status(404).json({
        message: "error 404 - page not found"
    })
})

const server= app.listen(PORT, ()=>{
    console.log(`Server escuchando en puerto: ${PORT}`);
})