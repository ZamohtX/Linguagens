//Declaração de Função (Function hoisting)



//                  First-class objects (Objetos de Primeira Classe)
falaOi();
function falaOi() {
    console.log('Oi');
}


// Function expression
const souUmDado = function() {
    console.log("Sou um dado.");
}
function executaFuncao(funcao) {
    console.log('Vou executar sua função abaixo: ')
    funcao();
}
executaFuncao(souUmDado);


// Arrou function (Function expression)
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
}
funcaoArrow();

// Dentro de um Objeto
const pessoa = {
    falar: function() {
        console.log('Estou falando...')
    }, // dessas duas formas
    pararDeFalar() {
        console.log("Estou calado...")
    }
}
pessoa.falar();
pessoa.pararDeFalar();







