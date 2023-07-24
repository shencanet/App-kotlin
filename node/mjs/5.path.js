
const path = require('node:path');



console.log(path.sep)//te dice la separacion de tu sistema operativo

//unir rutas con path.join

const filePath = path.join('/content', 'subfolder', 'test.txt')

console.log(filePath)

const base = path.basename('/content/subfolder/test.txt')
console.log(base)


const filename = path.basename('/content/subfolder/test.txt', '.txt')// TE DA RL NONBRE DEL ARCHIVO SIN LA EXTENCION

console.log(filename)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')//te da la ruta absoluta

console.log(absolute)

const extencion = path.extname(absolute)//te da la extencion del archivo

console.log(extencion)





