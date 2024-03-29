const express=require("express")
const path=require("path")
const UserManager=require("./clases/userManager")

const PORT=3000;
const app=express();

const userManager=new UserManager(path.resolve(__dirname, './data/usuarios.json'))

app.get("/usuarios", async(req, res)=>{

    let usuarios=await userManager.getUsuario();

    res.json(usuarios)
})

app.listen(PORT, ()=>console.log(`Server online en puerto ${PORT}`))
