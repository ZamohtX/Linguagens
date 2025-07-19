//                      Exportação

export const nome = 'Thomaz';
const sobrenome = 'Xavier';
const idade = 20;
const cpf = '071.568.334-99';


function soma(x,y) {
    return x + y;
}

export default class Pessoa{
    constructor(nome,sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}


// export default (x,y) => x * y;


// export { cpf as default};
export { nome as nomeModificado, sobrenome, idade, soma }