//promesas en paralelo

import { readFile } from 'node:fs/promises'

promise.all([
    readFile('./archivo.txt', 'utf-8'),


]).then (([text, secondTeXT])=>{
    console.log('leyendo el Primer archivo......'),

    console.log('TESTO ASINCRONO ',text)
})

