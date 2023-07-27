const http = require('node:http') // protocolo HTTP
const { findAvailablePort } = require('./10.free-port.js')
const fs = require('node:fs') // file system


console.log(process.env)//variable entorno

const desiredPort = process.env.PORT || 3000

const processRequest = (request, response) => {
  if(request.url === '/') {
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/html', charset='utf-8')
    response.end('Hello World')
    response.end()
  }else if(request.url === '/contacto') {
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/html', charset='utf-8')
    response.end('<h1>About</h1>')
    response.end()
}else {
  request.statusCode = 404
  response.setHeader('Content-Type', 'text/html', charset='utf-8')
  response.end('Not Found')
  response.end()

}
}
