//                   Atribuição via Desestruturação (Arrays)

// let a = 'A'; // B
// let b = 'B'; // C
// let c = 'C'; // A

// const letras = [b, c, a]
// [a, b, c] = letras;
// console.log(a, b, c);

// ... rest operator, ... spread operator
// const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];
// const [primeiroNumero, segundoNumero, terceiroNumero, ...resto] = numeros;
// console.log(primeiroNumero, segundoNumero, terceiroNumero);
// console.log(resto)


// const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];
// const [primeiroNumero, , terceiroNumero, , quintoNumero, ,setimoNumero] = numeros;
// console.log(primeiroNumero, terceiroNumero, quintoNumero )




const numeros = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const [,[,,seis]] = numeros;
console.log(seis)

const [lista1, lista2, lista3] = numeros;
console.log(lista2[2]);