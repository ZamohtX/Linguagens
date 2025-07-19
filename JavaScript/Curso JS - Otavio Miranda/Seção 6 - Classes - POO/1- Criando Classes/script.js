//                           Classes

// Tem o mesmo papel da Função Construtora
// É uma forma diferente de escrever funções contrutoras


// Criar Classe
class Pessoa {
        // -> Metodo para receber os parametros
        constructor(nome, sobrenome) {       // -> Método opcional
                this.nome = nome;
                this.sobrenome = sobrenome;
        }



        // Os Metodos da classe são automaticamente guardados no prototype dela.
        // Apenas as informações especificas do objeto ficaram guardadas em memoria.
        falar() {
                console.log(`${this.nome} esta falando`)
        }
        comer() {
                console.log(`${this.nome} esta comendo`)    
        }
        beber() {
                console.log(`${this.nome} esta bebendo`)
        }
}


// Criando um objeto a partir da classe (Instanciando)
const p1 = new Pessoa('Thomaz', 'Xavier');
const p2 = new Pessoa('Lilian', 'Cristine');
console.log(p1);
p1.falar()





















