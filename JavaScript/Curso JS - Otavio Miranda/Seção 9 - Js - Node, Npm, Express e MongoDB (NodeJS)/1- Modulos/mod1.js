                // Modulo a ser exportado


const nome = 'Thomaz';
const sobrenome = 'Xavier';
const idade = 20;
const cidade = 'Maceio';
const estadoCivil = 'Solteiro';

const falaNome = () => `${nome} ${sobrenome}`;

    /* module é um objeto com todas os dados do modulo,
    dentro de module, existe a chave "exports", que é um objeto que colocaremos
    os itens a serem importado */
        // Cria a chave nome dentro de exports, com valor igual ao nome.
module.exports.nome = nome;
module.exports.sobrenome = sobrenome;
module.exports.falaNome = falaNome;
        // Atalho para forma de cima, faz a mesma coisa
exports.idade = idade;
exports.cidade = cidade;
        // this vai apontar para exports
this.estadoCivil = estadoCivil;
        // Exportando classe
class Pessoa {
    constructor(nome) {
        this.nome = nome
    }
}
exports.Pessoa = Pessoa;

        // Exportação em massa
module.exports = {
    nome, sobrenome, idade, cidade, estadoCivil, falaNome, Pessoa
}