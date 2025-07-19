//                      Manipulando Prototypes 




// Ao criar um novo objeto, dessa forma, o JS cria o objeto com a funcao constutora Object que tem seu prototype  
// const objA = {  // new Object -> Object.prototype
//   chaveA: 'A'
//   // __proto__: Object.prototype
// };

// const objB = {
//   chaveB: 'B',
//   // __proto__: objA
// }

// const objC = new Object();
// objC.chaveC = 'C';

// Object.setPrototypeOf(objB, objA);
// Object.setPrototypeOf(objC, objB);
// console.log(objB.chaveA);


//Manipulando Prototypes
      // Funcao construtora de produto
function Produto(nome, preco) {
  this.nome = nome; // Atributos do objeto
  this.preco = preco;
}
      // Definindo os metodos usando prototypes 
Produto.prototype.desconto = function (percentual) {
  this.preco = this.preco - (this.preco * (percentual / 100));
};
Produto.prototype.aumento = function(percentual) {
  this.preco = this.preco + (this.preco * (percentual / 100));
}

// Forma 1:
      // O objeto vai ter todos os metodos 
const p1 = new Produto('Camiseta', 50);
p1.aumento(100)
p1.desconto(50)
console.log(p1);

// Forma 2:
      // Criando um novo objeto sem a função construtora
const p2 = {
  nome: 'Caneca',
  preco: 15
}           // Podemos colocar o prototype desse objeto como sendo igual a Produto, deixando disponivel todos os metodos de produto para esse novo objeto
Object.setPrototypeOf(p2, Produto.prototype);
p2.aumento(100);
console.log(p2)

// Forma 3
      // Criando um novo Objeto e setando o prototype dele de uma vez
const p3 = Object.create(Produto.prototype, { // esse objeto com as chaves é um argumento opcional
      // Podemos adicionar as chaves assim diretamente
  preco: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 120,
  },
  tamanho: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 42,
  },
  cor: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 'Preto'
  }
  
});
      // Podemos adicionar um atributo ao objeto dessa forma tambem
p3.nome = 'Tenis'
      // Como configuramos o protorype desse objeto como sendo Produto.prototype, 
      // todos os metodos de Produto.prototype estarao disponiveis nessse objeto
p3.aumento(50);
console.log(p3);















