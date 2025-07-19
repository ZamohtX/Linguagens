//                  Factory Functions + Prototypes


/*
                          Mixing Composition

  é um tipo de arquitetura de codigo, assim como as Factory Functions e Constructor Functions
consiste basicamente deixar metodos guardados em objetos disponiveis no escopo global e 
na criação de novos objetos, adicionar no prototype os metodos que determinado objeto
vai precisar, basicamente como um quebra cabeça




*/
        // Aqui ficam as constantes com os metodos no escopo global
const falar = {
    falar(){
        console.log(`${this.nome} está falando`);
    } 
};
const comer = {
    comer(){
        console.log(`${this.nome} está comendo`);
    },
};
const beber = {
    beber(){
        console.log(`${this.nome} está bebendo`);
    },
};
        // Aqui adicionamos os metodos no prototype que determinado objeto vai precisar
//const pessoaPrototype = {...falar, ...comer, ...beber}
const pessoaPrototype = Object.assign({}, comer, beber, falar)
        // Factory Function
function criaPessoa(nome, sobrenome) {
            // Criando a Factory Function com o prototype ja definido
    return Object.create(pessoaPrototype, {
        nome: { value: nome },
        sobrenome: { value: sobrenome },
    })
}
console.log()
    // Deixando assim, os metodos globias disponiveis para determinado objeto
const p1 = criaPessoa('Thomaz', 'Xavier');
p1.falar();

console.log()


