// Mais sobre Numbers


let num1 = 10.156116168;
let num2 = 2.5;
let num3 = 'Hello, World'

// Convertando Number para String
console.log(num1.toString() + num2);

    // Verifica se é um Number
console.log(Number.isNaN((num1 * num3)));

    // Convertendo Number para Binario
console.log(num1.toString(2));

    // Arredondando Number
console.log(num1.toFixed(2));

    // Verifica se o Number é inteiro
console.log(Number.isInteger(num1));

num1 = 0.7;                 /* Consertando Bug do padrao IEEE 754-2008 */
num2 = 0.1;
num1 += num2;
num1 += num2;
num1 += num2;
num1 = parseFloat(num1.toFixed(2));
console.log(num1);
console.log(Number.isInteger(num1));
                        /* Ou*/ 
num1 = 0.7;
num2 = 0.1;
num1 = ((num1 * 100) + (num2 * 100)) / 100;
num1 = ((num1 * 100) + (num2 * 100)) / 100;
num1 = ((num1 * 100) + (num2 * 100)) / 100;
console.log(num1);
console.log(Number.isInteger(num1));

    