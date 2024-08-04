// Conversión de minúscula a mayúscula:

// Escriba un programa en JavaScript que utilice una función que reciba un carácter como parámetro, si el carácter es una letra minúscula, modifique el parámetro para convertirlo en mayúscula.


const prompt = require('prompt-sync')({ siging: true })
miCaracterMinuscula = (prompt(`Ingrese un caracter : `))

function miFuncion (caracter){
    if (caracter>='a' && caracter <='z'){
        return caracter.toUpperCase()
    }
return caracter
}

console.log({miCaracterMinuscula});
const miCaracterMayuscula = miFuncion(miCaracterMinuscula)
console.log(`Mi caracter en mayusculas: "${miCaracterMayuscula}"`);