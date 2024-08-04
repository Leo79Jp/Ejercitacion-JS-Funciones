// Suma con tercer argumento:

// Escriba un programa en JavaScript similar al anterior, pero esta vez utilizando una función que tome un tercer argumento y coloque el resultado de la suma en dicho parámetro.
const prompt = require('prompt-sync')({ siging: true })

a = parseInt(prompt(`Ingrese el primer numero: `))
b = parseInt(prompt(`Ingrese el segundo numero : `))
const c = { valor: 0}

function sumatercerArgumeto (num1, num2, resultado){
  resultado.valor = num1+ num2
}
sumatercerArgumeto(a, b, c)
console.log(`La suma de ${a} + ${b} es = ` + c.valor);
