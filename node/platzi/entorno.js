let saludo = process.env.NOMBRE || 'Hola';
console.log(saludo);
//en powershen $env:NOMBRE="Carlos" primero definimos la variable de entorno y luego la ejecutamos 
//En caso de querer tener variables de entorno en un archivo, puede utilizar dotenv, de esta manera puede crear el archivo .env y ahí configurar las variables necesarias.
//Y luego accederlas donde las necesite, ejemplo:

/*/require('dotenv').config();
console.log(process.env.NAME);*/
