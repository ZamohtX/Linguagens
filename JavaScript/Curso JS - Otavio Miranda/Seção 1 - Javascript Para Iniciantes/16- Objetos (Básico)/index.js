// Objetos


//          Criando um Objeto
const pessoa0 = {
  nome: 'Thomaz',
  sobrenome: 'Xavier',
  idade: 20,
};
console.log(pessoa0.nome);
console.log(pessoa0.idade);

//          Criando uma Função que cria um Objeto
function criaPessoa (nome, sobrenome, idade) {
  return {
    nome: nome,
    sobrenome: sobrenome,
    idade: idade,
  }
};

const pessoa1 = criaPessoa('Thomaz', 'Xavier', 20);
const pessoa2 = criaPessoa('Lilian', 'Cristine', 18);
console.log(pessoa1.nome, pessoa1.sobrenome);
console.log(pessoa2.nome, pessoa2.sobrenome);

//           Métodos do Objeto
const pessoa = {
  nome: 'Thomaz',
  sobrenome: 'Xavier',
  idade: 20,

  fala() {
    console.log(`${this.nome} ${this.sobrenome} está falando...`); 
  },
  
  falaIdade() {
    console.log(`A minha idade atual é ${this.idade}`);
  },

  incrementaIdade() {
    this.idade++;
  }
};

pessoa.fala();
pessoa.falaIdade();
pessoa.incrementaIdade();
pessoa.falaIdade();























