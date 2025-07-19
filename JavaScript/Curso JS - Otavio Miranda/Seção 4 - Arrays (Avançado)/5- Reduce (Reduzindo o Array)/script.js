//                       Reduce


// Serve para reduzir o array a um unico elemento
const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];
/*
//                  Parâmetros da função
const total = numeros.reduce(function(acumulador, valor, indice, array) {
    // codigo qualquer...
}, valorInicial);
*/

const total = numeros.reduce(function(acumulador, valor, indice, array) {
    acumulador += valor
    return acumulador;
}, 0);
console.log(total);


const pares = numeros.reduce((acumulador, valor) => {
    if (valor % 2 === 0) acumulador.push(valor);
    return acumulador;
    
}, []);
console.log(pares);


const dobro = numeros.reduce((acumulador, valor) => {
    acumulador.push(valor*2);
    return acumulador;
}, []);
console.log(dobro);



const pessoas = [
    {nome: 'Thomaz', idade: 20},
    {nome: 'Lilian', idade: 18},
    {nome: 'William', idade: 20},
    {nome: 'Davysson', idade: 20},
    {nome: 'Ana', idade: 22},
    {nome: 'Larissa', idade: 21},
];
const maisVelha = pessoas.reduce((acumulador, valor) => {
    console.log(acumulador.idade, valor.idade)
    if (acumulador.idade > valor.idade) return acumulador;
    return valor;
})








