//              Funções imediatas OU Funções Auto-invocadas 
//            (IIFE - Imediately invoked function expression)


// Funções que sao invocadas sozinhas, e sem tocar o escopo global, protegendo o codigo de bibliotecas e coisas que poderiam prejudicar o codigo

/*

(function(){
    CODIGO AQUI
})()

*/


(function(idade, peso, altura) {
    const nome = 'Thomaz';
    console.log(nome)
    const sobrenome = 'Xavier';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Thomaz'))
    }
    falaNome();
    console.log(idade, peso, altura)
})(20, 100, 1.76);
const nome = 'Qualquer coisa';
