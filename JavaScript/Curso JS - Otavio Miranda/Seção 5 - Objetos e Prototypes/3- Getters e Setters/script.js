//                       Getters e Setters


// Servem para proteger os valores de algum atributo e capturar possiveis modificacoes para tratar

// Getter -> vai pegar o valor
// Setter -> vai setar p valor na variavel

// Com Getters e Setters o codigo fica mais seguro contra erros 



// Getter e Setter em uma Function Constructor
function Produto(nome, preco, estoque) {

        let estoquePrivado = estoque; // trabalahando com um atributo privado da funcao para nao usar o this e causar um loop infinito

        Object.defineProperty(this, 'estoque', {
                // nao precisa de writeble
                // nao precisa de value
                enumerable: true,
                configurable: false, 

                // Getter
                get: function() { 
                        return estoquePrivado; // vai retornar o atributo privado com o valor
                },
                set: function(valor) {
                        if (typeof valor !== 'number') { // vai filtrar o valor mandado para saber se é um numero ou nao, caso nao seja, manda um erro pro programador
                               throw new TypeError('Esse atributo só recebe numeros');
                        }
                        estoquePrivado = valor; // Depois que o valor passar pelas verificacoes necessarias impostas, vai atribuir o valor passado para a o atributo privado
                }
        });
}
const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 'O valor que eu quero' // vai ser lancado um erro devido a verificacao de valor que fizemos no setter
console.log(p1.estoque);


// Getter e Setter em uma Fabric Function
function criaProduto(nome) {
        return{
                get nome() { // Obtem o valor passado
                        return nome;
                },
                set nome(valor) {
                        valor = valor.replace("coisa", ''); // verificacao e tratamento do valor
                        nome = valor;// seta o valor na variavel
                }

        }
}
const p2 = criaProduto("Camisa");
p2.nome = 'qualquer coisa'; // tratamos o coisa no setter
console.log(p2)




