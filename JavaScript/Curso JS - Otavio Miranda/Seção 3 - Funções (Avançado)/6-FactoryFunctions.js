/*
                            Factory Functions
                        
    São funções que retornam objetos



*/
// Função que vai criar 
function criaPessoa(nome, sobrenome, altura, peso){
    return {
        // Todos os objetos criados por essa função terão todos os atributos e métodos da função
        nome, 
        sobrenome,
        fala: function(assunto){ // This se refere a instancia do objeto em tempo de execução
            return `${this.nome} ${this.sobrenome} está ${assunto}`;
        },
        altura,
        peso,
        // Usando get podemos usar um método como se fosse atributo
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            console.log(valor);
        }

    };
}

// p1 é uma pessoa criada pela função criaPessoa
const p1 = criaPessoa('Thomaz', 'Xavier', 1.8, 100);
console.log(p1.fala("falando sobre Vasco"));

// usando um método como um atributo do objeto
console.log(p1.nomeCompleto);