//                                  Polimorfismo


/*
        Forma para fazer metodos se comportarem de forma diferente em subclasses

          Quando as funções filhas herdam os metodos da Superclass, esses metodos 
        ficam disponiveis para uso. 
          Quando sobrescrevemos o metodo de uma funcao pai em uma funcao filha, 
        para alterar o comportamento do metodo em determinada funcao, chamamos
        isso de POLIMORFISMO.
          Ao alterar o metodo na filha, nao alteramos o metodo do pai, sobrescrevemos
        a funcao apenas na filha, deixando o metodo do pai disponivel em outras filhas
        que nao foram alteradas. 

*/

              // Classe Construtora Pai
// Superclass
function Conta(agencia, conta, saldo) {
          // Atributos de Conta
  this.agencia = agencia; 
  this.conta = conta;
  this.saldo = saldo;
}


// Metodos da Funcão Construtora Pai
          // Metodo Sacar
Conta.prototype.sacar = function(valor) {
  if (this.saldo < valor) {
    console.log(`Saldo insuficiente: R$${this.saldo}` )
    return;
  };
  this.saldo -= valor
  this.verSaldo();
};
          // Metodo Depositar
Conta.prototype.depositar = function(valor) {
  this.saldo += valor;
  this.verSaldo();
};
          // Metodo Ver Saldo
Conta.prototype.verSaldo = function() {
  console.log(`Ag/c: ${this.agencia}/${this.conta} ` + 
   `Saldo: R$${this.saldo.toFixed(2)}`
   );
};




// Funcao Contrutora CC -> (Filha de Conta)
function CC(agencia, conta, saldo, limite) {
          // Colocando CC como filha de Conta
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite
    
}
CC.prototype = Object.create(Conta.prototype);
CC.prototype.constructor = CC;

// Metodo Sacar Esse método esta sendo sobrescrito APENAS em CC. Caracterizando um POLIMORFISMO
//  ou seja, o metodo esta se comportando de forma diferente apenas em CC
CC.prototype.sacar = function(valor) {
  if ((this.saldo + this.limite) < valor) {
    console.log(`Saldo insuficiente: R$${this.saldo}` )
    return;
  };
  this.saldo -= valor
  this.verSaldo();
};
// Criação do objeto cc
const cc = new CC(11,22,0,100); // Criando o objeto cc que é um CC que é FILHO de Conta
cc.depositar(10); // Usa os metodos de Conta que estao disponiveis
cc.sacar(110); // Metodo de Conta sobrescrito em CC, se comportando de forma diferente apenas em CC
cc.sacar(1); // Metodo de Conta 


console.log()
// A funcao construtora CP é filha de Conta, assim como CC, porem, aqui não foi sobrescrito nenhum metodo
// ou seja, a funcao original sacar de Saldo esta disponivel em CP, mas nao em CC, pois la foi sobrescrita
function CP(agencia, conta, saldo) {
  Conta.call(this, agencia, conta, saldo);
  this.limite = limite
  
}
CP.prototype = Object.create(Conta.prototype);
CP.prototype.constructor = CP;

const cp = new CP(12,33,0);
cp.depositar(10);
cp.sacar(110); // Metodo original de Conta
cp.sacar(1);

















