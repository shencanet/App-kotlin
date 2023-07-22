const fs = require('node:fs')//a partir de la version 16 de node se recomienda usar el prefijo node: para importar modulos nativos

const stats = fs.statSync('./archivo.txt')
console.log(
    "Es un fichero",
    stats.isFile(),//SI ES UN FICHERO
    "Es un directorio",
    stats.isDirectory(),//SI ES UN DIRECTORIO
    "Es un enlace simbolico",
    stats.isSymbolicLink(),//SI ES UN ENLACE SIMBOLICO
    "Tamano del archivo",
    stats.size,//TAMAÑO DEL ARCHIVO
    stats.mtime,//ULTIMA FECHA DE MODIFICACION
    stats.atime,//ULTIMA FECHA DE ACCESO
    stats.birthtime,//FECHA DE CREACION
    "Id Usuario",
    stats.uid,//ID DEL USUARIO
    "Id Grupo",
    stats.gid,//ID DEL GRUPO
    stats.mode,//PERMISOS DE ACCESO
    stats.ino,//NUMERO DE INODO
    stats.dev,//NUMERO DE DISPOSITIVO
    stats.nlink,//NUMERO DE ENLACES
)
