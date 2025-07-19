/*
window.alert('Hello world');
window.confirm('quer continuar? ');
window.prompt('Digite um texto.')*/

/* 
let num1 = parseFloat(prompt('Digite um numero'));
let num2 = parseFloat(prompt('Digite outro numero'))
let resultado = num1 + num2;
alert(`O resultado da soma é ${resultado}`);
*/

let varA = 'A'; // b
let varB = 'B'; // c
let varC = 'C'; // a
/*
let varTemp = varC
varC = varA;
varA = varB;
varB = varTemp; */
[varA, varB, varC] = [varB, varC, varA];


console.log(varA, varB, varC)