const http = require('http')

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.write('Hola Mundo');
        res.end();
    }

    if(req.url === '/api/productos/'){
        res.write(JSON.stringify(['teclado', 'raton', 'monitor']));
        res.end();
    }
});

server.listen(3000);

/* server.on('connection', (puerto) => {
    console.log('nueva coneccion')
})

puerto = server.listen({host: 'localhost', port: 3000});
server.emit('connection', puerto) */



console.log('servidor escuchando en el puerto 3000...')


