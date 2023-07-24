
const path = require('node:path');



console.log(path.sep)//te dice la separacion de tu sistema operativo

//unir rutas con path.join

const filePath = path.join('/content', 'subfolder', 'test.txt')

console.log(filePath)
