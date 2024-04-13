import express from 'express';
import { router as usuariosRouter} from './routes/usuariosRouter.js';

const PORT= 3002
const app= express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use("/app/usuarios", usuariosRouter)


app.listen(PORT, ()=>console.log(`Server online en puerto ${PORT}`))
