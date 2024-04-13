const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularIMC(peso, altura) {
    var imc = peso / (altura * altura); // Calcula usando fórmula: peso / (altura * altura)
    return imc;
}
rl.question('Introduzca su peso en kilogramos: ', (pesoInput) => {
    var peso = parseFloat(pesoInput);

    rl.question('Introduzca su altura en metros: ', (alturaInput) => {
        var altura = parseFloat(alturaInput);

        var imc = calcularIMC(peso, altura);
        console.log("Tu IMC es: " + imc.toFixed(2));
        rl.close();
    });
});
