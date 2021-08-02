const datos = require('./datos');
const path = require('path');
const os = require('os')
const fs = require('fs')

const EventEmitter = require('events') //para usar este modulo se debe instancear 
const myEmitter = new EventEmitter() //instancia de events  

datos.log('holaa');

console.log(__dirname);
console.log(__filename);


console.log(path.parse(__dirname))//obtenemos el path convertido en un objeto
console.log(path.parse(__filename).ext) //obtenemos file path en un obejto, podemos obtener la ext, la sobase, name del mismo

const cpus = os.cpus()
console.log(cpus)

const memoriaLibre = os.freemem()
console.log(`memoria libre: ${memoriaLibre.toExponential()}`)

console.log(fs.readdirSync('./'))
//registra los oyentes
myEmitter.on('myFirstListener', () => { //usando funciones flecha EmacScript6
    console.log('My primer oyente')
})

myEmitter.on('mySecundListener', (message) =>{
    console.log('mi segundo oyente con argumento', message)
})

//registra el evento
myEmitter.emit('myFirstListener')
myEmitter.emit('mySecundListener', {id:'1', name:'aldemar'})



