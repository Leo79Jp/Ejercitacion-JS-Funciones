// Suma de dos números:

// Escriba un programa en JavaScript con una función que tome como parámetros dos enteros, los sume y devuelva como resultado la suma. El programa deberá pedir al usuario 
//los dos números, luego llamar a la función con los números leídos como argumentos y, por último, informar al usuario el valor de la suma.

const prompt = require('prompt-sync')({ siging: true })

a = parseInt(prompt(`Ingrese el primer numero: `))
b = parseInt(prompt(`Ingrese el segundo numero" : `))

const sumar = ( a, b ) => a + b

console.log(`La suma es: ${sumar(a, b)}`);