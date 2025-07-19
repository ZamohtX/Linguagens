//                                   ProtoTypes 

/*
          Javascript é baseado em protótipos para passar propriedades e metodos
        de um objeto para outro.

        Definicao de Prototipo:
          Prototipo é o termo usado para se referir ao que foi criado pela primeira vez,
        servindo de modelo ou molde para futuras produções.

          Todos os objetos tem uma referência interna para um prototipo (__proto__)
        que vem da propriedade prototype da função contrutora que foi usada para cria-lo.
          Quando tenteamos acessar um membro de um objeto, primeiro, o motor do JS vai tentar
        encontrar este membro no proprio objeto e depois a cadeia de prototipos é usada ate
        o topo (null) ate encontrar (ou não) tal membro. 
*/

//      Basicamente, é uma forma de otimizar o codigo, pois os metodos nao estaram armazenados em cada objeto especifico,
//      mas disponiveis para qualquer intancia da funcao construtora.


// Constructor Function -> molde(classe)
function Pessoa(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}
Pessoa.prototype.nomeCompleto = () => this.nome + ' ' + this.sobrenome;




// Instancia -> É a ação de criar um novo objeto a partir da funcao contrutora
const pessoa1 = new Pessoa('Thomaz', 'O');// <- Pessoa = Função construtora
const data1 = new Date(); // <- Date = Função Construtora

console.dir(pessoa1)
console.dir(pessoa2)