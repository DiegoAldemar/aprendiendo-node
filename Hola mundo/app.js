function Sumar(numero1, numero2, callback){
    let resultado = numero1 + numero2
    callback(resultado)
}

function Resultado(res){
    console.log(res)
}

Sumar(3, 4, Resultado)