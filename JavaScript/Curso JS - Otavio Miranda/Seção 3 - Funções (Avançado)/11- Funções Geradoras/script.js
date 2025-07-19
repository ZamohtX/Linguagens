//                 Funções Geradoras

// Funções que retornam um valor por vez

// cada vez que a função for chamada, ela vai retornar o proximo valor 

// se a funcao geradora encontrar um return, ela acaba;



function* geradora1() {
    //codigo qualquer...
    yield 'valor1'
    //codigo qualquer...
    yield 'valor2'
    //codigo qualquer...
    yield 'valor3'
}

const g1 = geradora1();
// console.log(g1.next().value);
// console.log(g1.next().value);
// console.log(g1.next().value);
for (let valor of g1) {
    console.log(valor);
}



// Contador infinito 
function* geradora2() {
    let i = 0;

    while(true) {
        yield i;
        i++;
    }
}
const g2 = geradora2();
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);



// uma funcao geradora dentro de outra
function* geradora3(){
    yield 0;
    yield 1;
    yield 2;
}
function* geradora4(){
    yield* geradora3(); // executa a funcao geradora especificada
    yield 3;
    yield 4;
    yield 5;
}
const g4 = geradora4();
for(let valor of g4) {
    console.log(valor);
}




function* geradora5() {
    yield function() {
        console.log('Vim do y1');
    };
    
    yield function() {
        console.log('Vim do y2');
    }
    return function() {
        console.log('Vim do return')
    }
    yield function() {
        console.log('Nao vou ser executado por causa do return acima')
    }
}
const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;
func1();
func2();











