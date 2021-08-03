const serie = require('./serie')

let cantidad = 10;

serie.crearSerie(cantidad)
    .then(mensaje => {
        console.log(mensaje);
    })
    .catch(mensaje => {
        console.log(mensaje)
    })

