/**
                Funções Geradoras

    São funções que geram valores, de forma continua, como uma pilha, entregando um valor por ver




 */


// Definindo um gerador padrão
function* geradora1(){
    yield 'Valor 1';
    yield 'Valor 2';
    yield 'Valor 3';
}


const g1 = geradora1();
console.log(g1.next().value); // valor 1
console.log(g1.next().value); // valor 2
console.log(g1.next().value); // valor 3


// Fazendo um gerador infinito
function* geradorinfinito() {
    let i = 0;
    while (true) {
        yield i;
        i++;
    }
}

const g2 = geradorinfinito();
console.log(g2.next().value);