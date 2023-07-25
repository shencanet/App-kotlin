//objeto GLOBAL de node que contiene información del proceso actual
// ARGUMENTOS DE ENTRADA


//console.log(process.argv)


//controlar el flujo de la aplicación 

//process.exit(0) // 0 = todo bien, 1 = error

/*process.on('beforeExit', () => {
 console.log('el proceso va a terminar')
})*/

//Current working directory

console.log('cwd', process.cwd())

//platadorma en la que se ejecuta node

console.log('plataforma', process.platform)

console.log('plataforma2', process.env.NODE_ENV)
