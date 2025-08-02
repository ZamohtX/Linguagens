/*
                Funções Imediatas

    IIFE -> Immediately Invoked Function Expression

    Quando não queremnos usar o escopo global, ou puluir o escopo global usamos uma função imediata

    Podemos usar esse tipo de função para criar uma area isolada e protegida do código
*/

// Função anonima que não toca o escopo global e é invocada logo em seguida
(function(/*Podemos colocar parametros aqui */){
    const nome = 'THOMAZ';
    console.log(nome);
})(/*Podemos passar argumentos aqui*/);

const nome = 'Qualquer coisa';
