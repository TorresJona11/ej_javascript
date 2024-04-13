const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function comprobarPalindromo(texto) {
    texto = texto.replace(/ /g, '').toLowerCase(); //elimina espacios y convierte a min
    return texto === texto.split('').reverse().join('');//es el que compara si es palindromo
}

rl.question('Introduzca una palabra o frase: ', (entrada) => {
    if (comprobarPalindromo(entrada)) {
        console.log("'" + entrada + "' es un palindromo.");
    } else {
        console.log("'" + entrada + "' no es un palindromo.");
    }
    rl.close();
});
