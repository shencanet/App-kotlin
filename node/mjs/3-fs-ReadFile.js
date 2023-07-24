const fs = require('node:fs/promises')
//const { promises: fs } = require('node:util')//igual que la anterior para compaginar ambas versiones promesas callback
//const { test } = require('node:test')

console.log('leyendo el primer archivo......')

fs.readFile('./archivo.txt', 'utf-8')
.then(text => {
    console.log('Text Promesas', text)

})






console.log("Moviendo las manitas")

console.log('leyendo el segundo archivo......')
fs.readFile('./archivo2.txt', 'utf-8',(err, text) => {
    console.log(text)
})

/*
console.log('leyendo el tercer archivo......')
const text = fs.readFileSync('./archivo3.txt', 'utf-8')//sincrona
console.log(text)*/

//------------------Escribir archivos------------------
const banda = {
    id: 1,
    nombre: 'Radiohead',
    'tipo de musica': 'Rock',
    albunes: ['Pablo Honey', 'Ok Computer', 'In Rainbows'],
  };
  console.log(banda['nom' + 'bre']);
  /*Respuesta Correcta: A) Radiohead
En JavaScript hay dos maneras de acceder a las propiedades de un objeto, con la notación de punto y con la notación de corchetes.

Usamos la notación de punto cuando conocemos el nombre literal de la propiedad a la que queremos acceder. La key a la que accedemos con esta notación debe ser un nombre de variable válido.

La notación de corchetes se diferencia en que todo lo que este dentro de los corchetes debe ser un string y es evaluado por JavaScript como una expresión.

Por este motivo, cuando hacemos console.log(banda["nom"+"bre"]) el lenguaje evalua los corchetes concatenando las cadenas de texto y mostramos por consola Radiohead.*/