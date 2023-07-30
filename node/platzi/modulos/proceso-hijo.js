const { exec } = require('child_process');
//const exec = require('child_process').exec// ñas dos lineas hacen lo mismo
//exec('ls -ls', (err, stdout, sterr) linux
exec('dir', (err, stdout, sterr)=> {//windows
    if (err){
        console.log(err);
        return false;
    }
    console.log(stdout);
})