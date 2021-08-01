const datos = require('./datos');
const path = require('path');
const os = require('os')


datos.log('holaa');

console.log(__dirname);
console.log(__filename);


console.log(path.parse(__dirname))//obtenemos el path convertido en un objeto
console.log(path.parse(__filename).ext) //obtenemos file path en un obejto, podemos obtener la ext, la base, name del mismo

const cpus = os.cpus()
console.log(cpus)

const memoriaLibre = os.freemem()
console.log(`memoria libre: ${memoriaLibre.toExponential()}`)

