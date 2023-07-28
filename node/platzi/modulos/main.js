const fs = require('./fs.js');

const CONTENIDO = 'Hola mundo desde Node.js';

main ('./shen.txt', CONTENIDO, 'utf-8');

async function main(path, contenido, codificacion){
    await fs.escribir(path, contenido, codificacion);
    const data = await fs.leer(path, codificacion);
    console.log(data);
    await esperar(path)

}

async function esperar(path){
    setTimeout(() => {
        fs.borrar(path)
    }, 2000);
}