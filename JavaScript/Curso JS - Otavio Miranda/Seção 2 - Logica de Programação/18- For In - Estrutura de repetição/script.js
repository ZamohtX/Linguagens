//              For In  - Estrutura de Repetição


const frutas = ['Pera', 'Maçã', 'Uva'];
const pessoa = {
    nome: 'Thomaz',
    sobrenome: 'Xavier',
    idade: 20,
}
// Le os indices do array ou chaves do objeto

for (let indice in frutas) {
    console.log(frutas[indice]);
}

for (let chave in pessoa) {
    console.log(pessoa[chave]);
}