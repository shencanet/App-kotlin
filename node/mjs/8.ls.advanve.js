const fs = require('node:fs/promises')


const  folder = process.argv[2] ?? '.'

fs.readdir(folder) 
.then(files => {
 
    files.forEach(file => {
    console.log(file)
})
})
.catch(err => {
    if (err) {
        console.log('error al leer el Directorio', err)
        return;
    }
})