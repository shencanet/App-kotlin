const fs = require('node:fs')


const  folder = process.argv[2] ?? '.'

fs.readdir('.') 
.then(files => {
 
    files.forEach(file => {
    console.log(file)
})
})
.cath(err => {
    if (err) {
        console.log('error al leer el Directorio',err)
        return;
    }
})