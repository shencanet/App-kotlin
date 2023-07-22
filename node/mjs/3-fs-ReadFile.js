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
