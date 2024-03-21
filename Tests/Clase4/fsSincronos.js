const fs = require('fs');
const path = require('path');

const rutaArchivo = path.resolve(__dirname, '../Clase4/archivos/archivo02.txt');

let texto1 = `TEXTO DE PRUEBA PARA CARGAR EN EL ARCHIVO DE PRUEBA`

//fs.writeFileSync(rutaArchivo, texto1, {encoding:"utf-8"})


try {
    fs.writeFileSync(rutaArchivo, texto1)

    if (fs.existsSync(rutaArchivo)) { //sirve para validar si existe el archivo
        let lecturaArchivo = fs.readFileSync(rutaArchivo, {
            encoding: "utf-8"
        }) //read lee el archivo y con el consolelog lo imprime por consola
        console.log(lecturaArchivo);
        fs.appendFileSync(rutaArchivo, "\n\n\t firma: Emanuel") //append agrega lo que se quiera agregar

        setTimeout(() => {
            fs.unlinkSync(rutaArchivo)
            console.log("Archivo Eliminado...!!!");
        }, 3000);
    }
} catch(error) {
    console.log(error.message);
}