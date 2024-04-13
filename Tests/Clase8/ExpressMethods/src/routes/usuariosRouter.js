import {Router} from 'express'
import UserManager from '../dao/UserManager.js';
import path from "path"
import __dirname from '../util';

export const router = Router();

const userManager= new UserManager(path.resolve(__dirname, "./data/usuarios.json"))

//Mostrar el array de objetos/usuarios
router.get("/api/usuarios", async(req, res)=>{

    // let limit=req.query.limit

    let {limit, skip, nombre}=req.query

    console.log(skip, nombre)

    let usuarios=await userManager.leerUsuarios()
    if(limit){
        usuarios=usuarios.slice(0, limit)
    }

    res.json(usuarios)

})

//Mostrar solo el usuario/objeto con el ID seleccionado
router.get("/api/usuarios/:id", async(req, res)=>{

    let id=req.params.id
    // validar que sea numerico...
    id=Number(id)  // "100"
    if(isNaN(id)){
        return res.json({error:`Ingrese un id numérico...!!!`})
    }

    try {
        let usuario=await userManager.leerById(id)
        if(!usuario){
            return res.json({message:`No existen usuarios con id ${id}`})
        }
    
        return res.json(usuario)
    } catch (error) {
        console.log(error)
        return res.json({error:"Error desconocido...!!!"})
    }



})

//Añade un nuevo usuario con el nombre el mail y genera un nuevo ID con la funcion ADD
router.post("/api/usuarios/", async(req, res)=>{
    let {nombre, email} = req.body
    // validacion
    if(!nombre || !email){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Complete nombre / email`})
    }

    // resto validaciones 
    try {
        let nuevoUsuario=await userManager.addUsuario({nombre, email}) 

        res.setHeader('Content-Type','application/json');
        return res.status(200).json(nuevoUsuario);

    } catch (error) {
        res.setHeader('Content-Type','application/json');
        return res.status(500).json(
            {
                error:`Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`,
                detalle:`${error.message}`
            }
        )
        
    }


})

//funcion para modificar un usuario
router.put("/api/usuarios/:id", async(req, res)=>{

    let id=req.params.id
    // validar que sea numerico...
    id=Number(id)  // "100"
    if(isNaN(id)){
        return res.json({error:`Ingrese un id numérico...!!!`})
    }

    // recuperar info desde body
    // validar 

    try {
        let usuarioModificado=await userManager.update(id, {})
        res.setHeader('Content-Type','application/json');
        return res.status(200).json(usuarioModificado);
    
    } catch (error) {
        console.log(error)
        return res.json({error:"Error desconocido...!!!"})
    }



})

//funcion para eliminar un usuario
router.delete("/api/usuarios/:id", async(req, res)=>{

    let id=req.params.id
    // validar que sea numerico...
    id=Number(id)  // "100"
    if(isNaN(id)){
        return res.json({error:`Ingrese un id numérico...!!!`})
    }

    try {
        let usuarioEliminado=await userManager.delete(id)
        res.setHeader('Content-Type','application/json');
        return res.status(200).json(usuarioEliminado);
    
        return res.json(usuario)
    } catch (error) {
        console.log(error)
        return res.json({error:"Error desconocido...!!!"})
    }

})