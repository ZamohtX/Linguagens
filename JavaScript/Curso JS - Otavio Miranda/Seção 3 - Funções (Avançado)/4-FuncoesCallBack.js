//                  Funções de Callback

// São funções que executam quando uma ação finaliza

/**
    Quando estamos em situações em que não sabemos o tempo de execução de uma determinada função,
    pra não sairmos da ordem de execução pretendida, usamos funções de callback, de forma que uma função
    só será executa ao termino da instrução anterior
 */


// Cenário de tempos de execução diferentes
function rand(min=1000, max=3000){
    const num = Math.random() * (max-min) + min;
    return Math.floor(num);
}
function f1(){
    setTimeout(function(){
        console.log('f1');
    }, rand())
}
function f2(){
    setTimeout(function(){
        console.log('f2');
    }, rand())
}
function f3(){
    setTimeout(function(){
        console.log('f3');
    }, rand())
}

// Usando Callback
function funcao1(callback){
    setTimeout(function(){
        console.log("=-=-=-=-=-=-=-=-=-=-=");
        console.log('Funcao 1');
        if (callback) callback(); // Executando o callback, deixando assim tudo aninhado
    }, rand())
}
function funcao2(callback){
    setTimeout(function(){
        console.log("Funcao 2");
        if (callback) callback();
    }, rand())
}
function funcao3(callback){
    setTimeout(function(){
        console.log("Funcao 3");
        if (callback) callback();
    },rand())
}

// Serão executadas em ordem diferente


// Serão executadas na ordem definida
funcao1(function(){  // aninhando a execução das funções
    funcao2(function(){
        funcao3(function(){
           console.log("Hello World"); 
        });
    });forma
});





























