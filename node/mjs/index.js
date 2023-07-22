/*console.log("Hola Mundo")
console.info("Hola Mundo")
console.error("Hola Mundo")
console.warn("Hola Mundo")
console.table("Hola Mundo")
//console.log(window)//da error porque no existe window en node
console.log(global)//global this es una variable global en toda nuestra aplicacion--> apunta a window en el navegador
//GLOBAL <----NODE  -----< GLOBALTHIS >----->NAVEGADOR---->WINDOW NAVEGADOR APUNTA A WINDOW PERO EN NODE APUNTA A GLOBAL
globalThis.console.log("Hola Mundo")
//TODO LO QUE ESTA EN GLOBALTHIS ESTA EN GLOBAL Y VICEVERSA
console.log(globalThis.XXXXXXXXX)//globalThis es una variable global en toda nuestra aplicacion--> apunta a window en el navegador
//PATRONES DISEÑO MODULO
//DIFERENTES MODULOS Y REUTILIZARLO 
const sum = require("./sum")//importamos la funcion suma del archivo suma.js

 console.log(sum(1, 2))

 const { sum } = require("./sum")//importamos la funcion suma del archivo suma.js

 console.log(sum(1, 2))//destructuring

 */

 
