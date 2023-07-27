function soyasincrona(){
    console.log('Inicio de la función asincrona');
    setTimeout(function(){
        console.log('Estoy siendo asincrona');
    },1500)
    return false;
}

soyasincrona();