//                  Funções Construtoras

// Retorna objetos
//

// Construtora -> Pessoa (new)        -> sempre inicia o nome com letra maiuscula


function Pessoa(nome, sobrenome) {
    
    const ID  = 123456; // atributo privado

    this.nome = nome; // atributo publico
    this.sobrenome = sobrenome;

    this.metodo = function() { // metodo publico
        console.log(this.nome + ": Sou um metodo")
    }
    const metodoInterno = () => { // metodo privado
        console.log('Sou um metodo interno');
    };
} 

const p1 = new Pessoa('Thomaz', 'Xavier');
const p2 = new Pessoa('Juliana', 'Maria');

console.log(p1.nome);
console.log(p2.nome);
p1.metodo();



















