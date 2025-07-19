//                  Objetos


// Criação 
const pessoa = {
        nome:  'Thomaz',
        sobrenome: 'Xavier',

}
const pessoa2 = new Object();

// Adicionar Chave
pessoa2.nome = 'Lilian';
pessoa2.sobrenome = 'Cristine';
pessoa2.idade = 18;
pessoa.idade = 20;

// Apagar chave
delete pessoa2.nome;
console.log(pessoa2);

// Metodos de Objetos
pessoa.falarNome = function() {
        console.log(`${this.nome} está Falando..`);
}
pessoa.getDataNascimento = function() {
        const dataAtual = new Date();
        return dataAtual.getFullYear() - this.idade;
}

// For em objetos
for (let chave in pessoa) {
        console.log(chave);     
}


// Factory Function
function criaPessoa(nome, sobrenome) {
        return{
                nome,
                sobrenome,
                get nomeCompleto() {
                        return `${this.nome} ${this.sobrenome}`;
                },
        }
}
const p1 = criaPessoa('Thomaz', 'Xavier')
console.log(p1.nomeCompleto);


// Constructor Function
function Pessoa(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
}
const p2 = new Pessoa('Thomaz', 'Xavier');


// Travando Objetos para que não possa ser alterado
const p3 = new Pessoa('Lilian', 'Cristine');
Object.freeze(p3); // Metodo freeze para congelar um objeto
p3.nome = 'Livia'; // nao é possivel alterar, mas nao vai dar erro
console.log(p3)

function Homem(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        Object.freeze(this); // Congela os atributos do objeto
}



















