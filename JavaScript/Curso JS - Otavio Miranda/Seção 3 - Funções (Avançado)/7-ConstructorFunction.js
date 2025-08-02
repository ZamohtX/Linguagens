/**
                Função Construtora

    
    São funções que criam e retornam objetos com base no molde pre-definido


 */

// Criando uma Constructor Function
function Pessoa(nome, sobrenome){
    // atributos do construtor
    this.nome = nome;
    this.sobrenome = sobrenome;
        // atributo privado interno do construtor    
    const ID = 12131;
        // método privado interno do construtor4
    const validarCpf = ()=>{
        return 1
    }
    

    // métodos do construtor
    this.falar = () => {
        console.log(`${this.nome} está falando.`);
    };
}

// Criando uma instancia da função
const p1 = new Pessoa('Thomaz', 'Xavier');
