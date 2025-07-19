//                       Getters e Setters - Classes




/*      symbol -> Pode ser usado para criar uma chave privada dentro do objeto
        A cada vez que symbol for chamado vai ser gerado um id aleatorio diferente*/

// Chave Velocidade
const _velocidade = Symbol('velocidade');

class Carro {
        constructor(nome) {
                this.nome = nome;
                /* Criando o atributo com uma chave privada feita com Symbol,
                Protege essa propridade de possiveis alterações*/
                this[_velocidade] = 0;
        }

        /* Para Acessar de fora da classe a propriedade privada com a chave privada Symbol
        Precisamos criar Getters e Setters */
                // Getter
        get velocidade() {
                return this[_velocidade];
                
        }
                // Setter
        set velocidade(valor) {
                if (typeof valor !== 'number') return;
                if (valor >= 100 || valor <= 0) return;
                this[_velocidade] = valor;
        }


        acelerar() {
                if (this[_velocidade] >= 100) return;
                this[_velocidade]++;
        }

        freiar() {
                if (this[_velocidade] <= 0) return;
                this[_velocidade]--;
        }

}
// Criando um novo objeto
const c1 = new Carro('Fusca');

        // Demonstração da condição de limite imposta no metodo
for( let i = 0; i <=200; i++) {
        c1.acelerar();
}

// Setando o valor do atributo atraves do setter com condicoes de validação
c1.velocidade = 2000
        // Acessando o atributo velocidade atraves do getter
console.log(c1.velocidade);






















