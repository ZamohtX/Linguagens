// Objeto Math

let num1 = 9.54578;


// Arredonda o Número para o mais próximo
let num2 = Math.round(num1);
console.log(num2);

// Arredonda o Número para baixo
num2 = Math.floor(num1);
console.log(num2);

// Arredonda o Número para cima
num2 = Math.ceil(num1);
console.log(num2);

// Achando o Maior Número de uma Sequência
console.log(Math.max(1,2,5,4,8,4,0,4,2,3,-1,-2,-7,5));

// Achando o Menor Número de uma Sequêcnia
console.log(Math.min(0,1,7,1,4,5,1,23,4,-1,-8,5));

// Gerando um Número Aleatorio entre 0 e 1 
let aleatorio = Math.random()
console.log(aleatorio);

// Gerando um Número Aleatório
aleatorio = Math.round(Math.random() * (10 - 5) + 5); /* Max = 10 e Min = 5 */
console.log(aleatorio);

// Pegando o Valor de PI
let valorPI = Math.PI;
console.log(valorPI);

// Potenciação
let potenciacao = Math.pow(2,10);
console.log(potenciacao);

// Raíz Quadrada
let raiz = num1 ** (1/2);
raiz = Math.sqrt(25);
console.log(raiz);

// Divisao por Zero
console.log(100 / 0); /* Infinity */ 











