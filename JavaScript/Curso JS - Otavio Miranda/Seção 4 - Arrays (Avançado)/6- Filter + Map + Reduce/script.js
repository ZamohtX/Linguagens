//                    Filter + Map + Reduce



const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const pessoas = [
    {nome: 'Thomaz', idade: 20},
    {nome: 'Lilian', idade: 18},
    {nome: 'William', idade: 20},
    {nome: 'Davysson', idade: 20},
    {nome: 'Ana', idade: 22},
    {nome: 'Larissa', idade: 21},
];
const numerosPares = numeros
    .filter((valor) => valor % 2 === 0)
    .map((valor) => valor *2)
    .reduce((acumulador, valor) => acumulador += valor); 
console.log(numerosPares);








