// Retorno da Função

/* Return retorna um valor e termina a função  */

function soma (x,y) {
    return x + y;
}
function soma2 (x,y) {
    console.log(x + y)
}
soma2(5,2)

const soma3 = function(x,y) {
    console.log(x+y);
}
soma3(2,3)

function criaPessoa(nome, sobrenome) {
    return { nome, sobrenome };
}
const p1= criaPessoa('Thomaz', 'Xavier');
const p2 = {
    nome: 'Thomaz',
    sobrenome: 'Xavier',
};
console.log(p1);
console.log(p2)


function falaFrase(comeco) {
    function falaResto(resto){   
        return comeco + ' ' + resto;
    }
    return falaResto;
}
const fala = falaFrase('Ola');
const resto = fala('Mundo');
console.log(resto)

function criaMutiplicador(mutiplicador) {
    return function (n) {
        return n * mutiplicador;
    };
}
const duplica = criaMutiplicador(2);
const triplica = criaMutiplicador(3);
const quadriplica = criaMutiplicador(4);









