let url = 'hola/comotasnas.com';

function dato(mensaje){
    //suponiendo un request
    console.log(mensaje);
}

//se puede exportar la funcion
module.exports.log = dato;


//s pueden exportar variables
module.exports.url = url;

console.log(module);