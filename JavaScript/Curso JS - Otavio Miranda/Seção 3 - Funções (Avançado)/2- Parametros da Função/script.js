//                  Paramêtros da Função

 
// function funcao() {
//     console.log('Hello, world');
//     /* Arguments é um objeto da funcão que guarda todos os paramentros passados para a   função (nao funciona em arrow function*/ 
//     console.log(arguments);
// }
// funcao('valor', 1,2,3,4,5,6,7);

function soma() {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total);
}
soma(1,2,3,4,5,6,7,8,9,10)


/* Colocando um valor padrao para um parametro */
function somaNum(a = 0, b) { // forma atual
    b = b || 0; // forma antiga;
    console.log(a + b);
}
somaNum(2);
somaNum(undefined, 4);// para fazer um parametro assumir o valor padrao, precisa enviar undefined no local


function pessoa({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade)
}
pessoa({nome: 'Thomaz', sobrenome: 'Xavier', idade: 20});

/*                   Rest Operator 
coloca o resto dos parametros em uma variavel com array*/
const conta = function(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
       if (operador === '+') acumulador += numero;
       if (operador === '-') acumulador -= numero;
       if (operador === '/') acumulador /= numero;
       if (operador === '*') acumulador *= numero;

    }
    console.log(acumulador)
}
conta('+', 1, 20,30,40,50);











