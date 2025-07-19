//                    Funções de CallBack

/* São funções que sao executadas quando uma ação finaliza */

function rand(min=1000, max= 3000) {
    const num = Math.random() * (max-min) + min;
    return Math.floor(num);
}


// Cada função tem seu tempo de execução aleatorio que nao podemos controlar
// Entao perdemos a ordem normal de execução do codigo 
function f1(callback) {
    setTimeout(function() {
        console.log('f1');
        if (callback) callback();  // Para resolvermos isso, criamos uma função de callback, que nao vai deixar que a proxima acao seja executada antes da anterior, mantendo assim, a ordem de execução desejada
    },rand())
}
function f2(callback) {
    setTimeout(function() {
        console.log('f2');
        if (callback) callback();
    },rand())
}
function f3(callback) {
    setTimeout(function() {
        console.log('f3');
        if (callback) callback();
    },rand())
}

//  Chamando as funções de callback, uma vai executar a outra na ordem de execução desejada
// f1(function() {
//     f2(function() {
//         f3(function() {
//             console.log('Ola Mundo')
//         })
//     })
// });
// f1 inicializa 
f1(f1Callback);

function f1Callback() {
    f2(f2Callback); // f1 vai executar f2
}
function f2Callback(){// f2 vai executar f3
    f3(f3Callback);
}
function f3Callback() {// e por fim, f3 vai executar o codigo desejado 
    console.log('Ola mundo')
}










