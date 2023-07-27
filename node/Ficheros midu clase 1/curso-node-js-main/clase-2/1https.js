const http = require('node:http') // protocolo HTTP
const { findAvailablePort } = require('./10.free-port.js')
const { lstat } = require('node:fs')

console.log(process.env)//variable entorno

const desiredPort = process.env.PORT ?? 3000

const server = http.createServer((req, res) => {//creamnos el servidos recibe un callback
  console.log('request received', req.url)//url de la peticion
  res.end('Hola mundo')
})

findAvailablePort(desiredPort).then(port => {
  server.listen(port, () => {
    console.log(`server listening on port http://localhost:${port}`)
  })
})
