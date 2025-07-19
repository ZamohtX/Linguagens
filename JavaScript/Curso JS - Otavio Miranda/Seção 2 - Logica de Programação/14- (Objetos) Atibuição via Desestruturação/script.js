//                   Atribuição via Desestruturação (Objeto)

const pessoa = {
    nome: 'Thomaz',
    sobrenome: 'Xavier',
    idade: 20,
    endereco: {
        rua: 'Ana Nery',
        numero: 165,
        bairro: 'Santos Dumont',
    },
    peso: 100,
    sexo: 'Masculino',
    estadoCivil: 'Solteiro',

}
const { 
    nome: nomeChave='', 
    sobrenome, 
    idade,
    endereco: { rua, numero },
    ...resto
} = pessoa;


console.log(resto);