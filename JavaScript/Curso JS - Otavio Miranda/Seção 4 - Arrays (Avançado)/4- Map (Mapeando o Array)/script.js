//                             Map

// Altera o Array Original
// Passa item por item modificando ou nao oq a função especificar
// O Array retornado vai ter sempre o mesmo tamanho do original

/*         Parâmetros da função
varArray.map(function(valor, indice, array) {
    return valorModificado
})
*/



const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

                                //   callback function
const numerosEmDobro = numeros.map((valor) => valor * 2);
console.log(numerosEmDobro);




const pessoas = [
    {nome: 'Thomaz', idade: 20},
    {nome: 'Lilian', idade: 18},
    {nome: 'William', idade: 20},
    {nome: 'Davysson', idade: 20},
    {nome: 'Ana', idade: 22},
    {nome: 'Larissa', idade: 21},
];
const nomePessoas = pessoas.map((obj) => obj.nome);
console.log(nomePessoas);
const objIdade = pessoas.map((obj) => ({ idade: obj.idade }));
console.log(objIdade)
const comIds = pessoas.map((obj, indice) => {
    obj.id = indice + 1;
    return obj;
});
console.log(comIds);


















