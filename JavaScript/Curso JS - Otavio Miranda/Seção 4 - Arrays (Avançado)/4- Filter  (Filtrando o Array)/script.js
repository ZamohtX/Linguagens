//                              Filter


// Filtra os valores de um array
// Retorna um array com os numeros filtrados

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];


// Filtrando numeros maior que um valor especificado


//                                        callback function
// const numerosFiltrado = numeros.filter((valor, indice, arrray) => {
//     return valor > 10;
// })
const numerosFiltrados = numeros.filter((valor) => valor > 10);
console.log(numerosFiltrados)



// Filtrando objeto no array
const pessoas = [
    {nome: 'Thomaz', idade: 20},
    {nome: 'Lilian', idade: 18},
    {nome: 'William', idade: 20},
    {nome: 'Davysson', idade: 20},
    {nome: 'Ana', idade: 22},
    {nome: 'Larissa', idade: 21},
];
const pessoasNomeGrande = pessoas.filter((obj) => obj.nome.length >= 7);
console.log(pessoasNomeGrande);
const pessoasMaiores18 = pessoas.filter((obj) => obj.idade >= 20);
console.log(pessoasMaiores18);
const nomePessoasA = pessoas.filter((obj) => obj.nome.toLowerCase()[obj.nome.length - 1] === 'a');
const nomeTerminaComA = pessoas.filter((obj) => obj.nome.toLowerCase().endsWith('a'));
console.log(nomePessoasA);
console.log(nomeTerminaComA);





















