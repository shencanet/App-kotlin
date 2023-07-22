const fs = require('node:fs')
const { test } = require('node:test')

console.log('leyendo el primer archivo......')
const test = fs.readFileSync('./archivo.txt', 'utf-8' (err, test))//sincrona callback asincrona
console.log(test)

console.log('leyendo el segundo archivo......')
const test2 = fs.readFileSync('./archivo2.txt', 'utf-8')

console.log(test2)