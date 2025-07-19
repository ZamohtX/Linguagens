//                    For Each



const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const pessoas = [
    {nome: 'Thomaz', idade: 20},
    {nome: 'Lilian', idade: 18},
    {nome: 'William', idade: 20},
    {nome: 'Davysson', idade: 20},
    {nome: 'Ana', idade: 22},
    {nome: 'Larissa', idade: 21},
];

// Função que itera sob um array, mas nao faz nada alem. exatamente como um for
numeros.forEach((valor, indice, array) => {
    console.log(valor, indice);
})
let total = 0
numeros.forEach((valor) => {
    total += valor
})





