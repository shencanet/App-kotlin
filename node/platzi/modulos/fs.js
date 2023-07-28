const fs = require('fs').promises

async function escribir(path, contenido, codificacion){
    try {
        await fs.writeFile(path, contenido, codificacion)
        console.log('Archivo escrito con exito')
    } catch (error) {
        console.error('No se pudo escribir el archivo', error)
    }
}

async function leer(path, codificacion){

    try{
        const data = await fs.readFile(path, codificacion);
        returndata.toString();+ç

    }catch(error){
        console.error('No se pudo leer el archivo', error)
    }
}

function borrar (path){
    try{
        fs.unlink(path)
    }catch(error){
        console.error('No se pudo borrar el archivo', error)
    }
}

exports.escribir = escribir;
exports.leer = leer;
exports.borrar = borrar;
