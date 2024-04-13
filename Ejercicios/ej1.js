const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function contarPalabras(frase) {
    frase = frase.trim(); //elimina espacion en blanco
    var palabras = frase.split(/\s+/);//identifica las palabras tomando em cuenta los espacios en blancos para separarlas y contarlas
    return palabras.length; //es el que devuelve las palabras que se contaron
}

rl.question('Introduce una frase: ', (frase) => {
    var cantidadPalabras = contarPalabras(frase);
    console.log("La cantidad de palabras en la frase es: " + cantidadPalabras);
    rl.close();
});
