//const os = require("os") depre modulo nativo os
const os = require('node:os')
console.log("---------------------------------------")
console.log("Nombre sistema operativo", os.platform())
console.log("---------------------------------------")
console.log("Version sistema operativo", os.release())
console.log("---------------------------------------")
console.log("Memoria total", os.totalmem()/ 1024 / 1024)
console.log("---------------------------------------")
console.log("Memoria libre", os.freemem()/ 1024 / 1024)
console.log("---------------------------------------")
console.log("os.homedir ",os.homedir())
console.log("---------------------------------------")
console.log("os.hostname", os.hostname())
console.log("---------------------------------------")
console.log("os.cpus",os.cpus())
console.log("---------------------------------------")
console.log("os.uptime", os.uptime())
console.log("---------------------------------------")
console.log("os.userInfo", os.userInfo())
console.log("---------------------------------------")
console.log("os.version",os.version())
console.log("---------------------------------------")
console.log("os.release", os.release())
console.log("---------------------------------------")
console.log("os.type",os.type())
console.log("---------------------------------------")
console.log("os.arch",os.arch())
console.log("---------------------------------------")
console.log("os.networkInterfaces", os.networkInterfaces())
console.log("---------------------------------------")
console.log("os.loadavg", os.loadavg())
console.log("---------------------------------------")
console.log("os.constants", os.constants)
console.log("---------------------------------------")
console.log("os.EOL", os.EOL)
console.log("---------------------------------------")
console.log("os.endianness", os.endianness())
console.log("---------------------------------------")
console.log("os.tmpdir", os.tmpdir())
console.log("---------------------------------------")
console.log(os.uptime()/ 60 /60 )//horas
console.log(os.uptime()/60)//minutos


// Path: node\index.js  