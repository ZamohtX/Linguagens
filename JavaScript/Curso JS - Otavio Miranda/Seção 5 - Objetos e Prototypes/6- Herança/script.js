//                  Herança

/*
      Produto -> aumento, desconto
          Camisa : cor,
          Caneca : mateiral

*/
// Produto é a Função construtora principal
function Produto(nome, preco) {
            // Todo produto vai conter nome e preco
  this.nome = nome; 
  this.preco = preco;
}
            // Definindo os metodos da funcao contrutora no proto 
Produto.prototype.aumento = function(quantia) {
  this.preco += quantia;
}
Produto.prototype.desconto = function(quantia) {
  this.preco -= quantia;
}

// Camisa é uma especificacao de Produto
function Camisa(nome, preco, cor) {
            // Camisa precisa HERDAR os atributos e metodos de Produto
            // .call(this(A quem se refere), atributos que serao passados para camisa)
  Produto.call(this, nome, preco);
            // Camisa é uma especificação de Produto, logo, vai ter novos atributos especificos desse Objeto
  this.cor = cor;
}
            // Passando o prototype de Produto para o prototype de Camisa
Camisa.prototype = Object.create(Produto.prototype); // Os dois prototypes agora sao iguais, camisa ganha os metodos escritos no proto de Produto
Camisa.prototype.constructor = Camisa; // Especifica que o constructor da Camisa não é Produto, mas sim ela mesma, Camisa
            // Camisa pode ter seus proprios metodos especificos para lidar com ela
            // Sobrescrevendo o aumento feito no prototype de Produto,  
Camisa.prototype.aumento = function (percentual) { // 
  this.preco = this.preco + (this.preco * (percentual/100))
}

// Criando os Objetos
const produto = new Produto('Generico', 50)
const camiseta = new Camisa('Regata', 60, 'Preta');
camiseta.aumento(100); // mostrando que o metodo aumento foi sobrescrito em camisa
console.log(camiseta);


// Caneca é mais uma especificação de Produto
function Caneca(nome, preco, material, estoque) { // Caneca vai conter outros atributos que Produto não tem
  Produto.call(this, nome, preco); // Passando a Herança de Produto para Caneca
  this.material = material; // Material é um atributo apenas de Caneca
            // Definindo um atributo especifico estoque de forma mais detalhada com DefineProperty                    
  Object.defineProperty(this, 'estoque',{
    enumerable: true, // permitindo que fique visivel
    configurable: false, // não permitindo que seja apagada
            // Getter 
    get: function() {
      return estoque
    },      // Setter
    set: function(valor) {
      if (typeof valor !== 'number') return; // validação de dado do setter
      estoque = valor
    }
  })
}
            // Passando o prototype de Produto para Caneca
Caneca.prototype = Object.create(Produto.prototype);
            // Especificando quem construiu o objeto, a propria caneca
Caneca.prototype.constructor = Caneca;

const caneca = new Caneca('Xicara', 50, 'Porcelana', 10);
caneca.aumento(10);
caneca.estoque = 100;
console.log(caneca);




















