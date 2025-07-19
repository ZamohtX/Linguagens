//                  Funções Fábrica (Factory Functions)


// Funções que retornam objetos



function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,

        // Getter -> Função que só obtem o valor
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },
        // Setter -> Função que seta o valor obtido pelo getter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },

        fala: function(assunto='Falando besteira') {
            return `${this.nome} está ${assunto}`
        },

        altura: altura,

        peso: peso,

        // Getter
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}
const p1 = criaPessoa('Thomaz', 'Xavier', 1.8, 100);
const p2 = criaPessoa("Lilian", 'Cristine', 1.65, 60);
console.log(p1.nomeCompleto)
console.log(p1.fala('falando sobre JS'));
console.log(p1.imc);
console.log(p2.fala('falando sobre fotografia'));
console.log(p2.imc);
p1.nomeCompleto = 'Juliana Maria Santos'
console.log(p1.nomeCompleto);
console.log(p1.nome);
console.log(p1.sobrenome);






















