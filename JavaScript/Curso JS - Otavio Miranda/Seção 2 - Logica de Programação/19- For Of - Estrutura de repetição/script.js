//              For Of  - Estrutura de Repetição

//      Apenas para Itens Iteraveis

const nome = 'Thomaz Xavier';
const nomes = ['Thomaz', 'Lilian', 'Juliana'];


for (let valor of nome) {
    console.log(valor);
}
for (let valor of nomes) {
    console.log(valor);
}

const pessoa = {
    nome: 'Thomaz',
    sobrenome: 'Xavier',
}

// Não funciona com Objeto
// for (let i of pessoa) {
//     console.log(i);
// }
// Precisa usar o For In 
// for (let chave in pessoa) {
//     console.log(chave, pessoa[chave]);
// }