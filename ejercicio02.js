// Suma con tercer argumento:

// Escriba un programa en JavaScript similar al anterior, pero esta vez utilizando una función que tome un tercer argumento y coloque el resultado de la suma en dicho parámetro.
const prompt = require('prompt-sync')({ siging: true })

a = parseInt(prompt(`Ingrese el primer numero: `))
b = parseInt(prompt(`Ingrese el segundo numero : `))

const operacion = ( a, b, resultado ) => {
        // validar que a y b sean numeros
        if (isNaN(a) || isNaN(b)) {
            return 'Error: Debe ingresar un numero'
          }
          return resultado(a, b)
}
const suma = (a, b) => a + b

 console.log(
    `La suma entre ${a} y ${b} es ${operacion(a, b, suma)}`
  )
  
