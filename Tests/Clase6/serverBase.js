//Un servidor se encuentra encendido TODO l tiempo
const http=require("http");//require es el "IMPORT" de NODE, (importa una libreria, en este caso la http) 

//Puertos, donde corre el servidor
//siempre que se trabaje con un servidor se tiene que usar algun puerto

//NO puede haber dos servidores escuchando en el mismo puerto
const PORT=3000;//el puerto 3000 o 3050 se usan para pruebas

//Constante donde va a vivir mi servidor
//En el REQ va a estar todad la infromacion del cliete, osea lo que llega en la peticion y en el RES la respuesta que va a generar el programador
const server=http.createServer((req, res)=>{

    console.log(req.url);
    if (req.url === "/juegos") {
        res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"})//el numero 200 significa que salio bien el prgrama
        res.end("Pagina de Juegos");
        return
    }

    res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"})//el numero 200 significa que salio bien el prgrama
    res.end("Server Basico con modulo http de node!! yyyy")

})

server.listen(PORT, ()=>{
    console.log(`Server online en el puerto ${PORT}`);
})
