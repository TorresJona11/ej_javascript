const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function factorial(numero) {
    if (numero === 0 || numero === 1) { //si es 0 o 1 es igual a 1
        return 1;
    }

    var resultado = 1; //inicia el resultado del factorial como 1

    for (var i = 2; i <= numero; i++) {//multiplica el resultado con cada numero entero desde 1 hasta N
        resultado *= i;
    }

    return resultado;
}

rl.question('Introduzca un numero para calcular su factorial: ', (numeroInput) => {
    var numero = parseInt(numeroInput);

    var resultadoFactorial = factorial(numero);
    console.log("El factorial de " + numero + " es: " + resultadoFactorial);
    rl.close();
});
