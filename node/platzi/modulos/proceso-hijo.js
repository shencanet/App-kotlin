const { exec } = require('child_process');
//const exec = require('child_process').exec// ñas dos lineas hacen lo mismo

//exec('ls -ls', (err, stdout, sterr) linux
//exec('dir', (err, stdout, sterr)=> {//windows
exec('node consola.js', (err, stdout, sterr) => { //llamamos a un porceso hijp de otro modulo
    if (err){
        console.log(err);
        return false;
    }
    console.log(stdout);
})