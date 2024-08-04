// Factorial de un número:

// Escriba un programa en JavaScript con una función que reciba un valor entero positivo y devuelva su factorial.
const prompt = require('prompt-sync')({ siging: true })

let valorIngresado = parseInt(prompt('Ingrese un numero: '))

  function myFactorial (item){
    if (item < 0){ // covierto valor a positivo
        item *= -1
    }
    for (let i = 1; i <= item; i++) {
            let aux = 1
            let factorial=1
        while (aux<=i){
            factorial *= aux
            aux++
        }
        resultadoFactorial = factorial
      }
    
    return item = resultadoFactorial
  }
const miFactorial = myFactorial(valorIngresado)
console.log(`El Factorial de ${valorIngresado} es = ${miFactorial}`);