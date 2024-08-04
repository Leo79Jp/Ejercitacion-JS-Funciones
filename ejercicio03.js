// Función F(X, Y):

// Haga un programa en JavaScript que llame a la función F(X, Y) = 5.6 * X + Y / 2.5 y que muestre los resultados para F(3, 5); F(9, 2) y F(56, 87).

const prompt = require('prompt-sync')({ siging: true })

function F(X, Y){
    return  (X * 5.6) + (Y / 2.5)
}

console.log(F(3, 5));
console.log(F(9, 2));
console.log(F(56, 87));


