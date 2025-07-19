//                           Map

/*
        É uma estrutura de dados assim como Array e Object.
        
        Map é basicamente uma mistura de Objeto com Tupla em python

        Itens Map não perdem a ordem de inserção e aceitam chaves numericas,
        diferente de Object.


*/


const pessoas = [
    { id: 2, nome: 'Thomaz' },
    { id: 3, nome: 'Lilian' },
    { id: 5, nome: 'Willian' },
];

            // Dessa forma usando Object nos perdemos a ordem dos objectos na lista,
            // pois em casos de chaves nuemericas, o javascript ordena a lista de forma crescente
// const novasPessoas = {};
// for (let pessoa of pessoas) {
//     const { id } = pessoa;
//     novasPessoas[id] =  {...pessoa};
// }


            // Usando o map nao perdemos a ordem, ele guarda as informacoes por ordem de inserção
const novasPessoas = new Map();
for(const pessoa of pessoas) {
    const { id } = pessoa;
                // Utilizamos o set para definir os valores no Map
                // .set(ID do valor, valor) 
    novasPessoas.set(id, {...pessoa});
}

for (const [identifier, {id, nome}] of novasPessoas) {
    console.log(identifier, id, nome)
}
    // Deleta o item guardado na key especificada
novasPessoas.delete(5);
console.log(novasPessoas)
