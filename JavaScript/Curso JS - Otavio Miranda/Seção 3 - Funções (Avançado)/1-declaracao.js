// Declaração de Função
    // Function Hoisting - As funções serão elevadas ao topo do arquivo na compilação, tornando possivel chamar a função em qualquer parte do codigo
function falaOI(){
    console.log("Hello, World");
}

// Function expression
const sou_um_dado = function(){ // fazemos uma variavel receber o retorno de um função anonima, podendo usar a variavel como uma variavel
    console.log('sou um dado');
}


// Função como parametro
function executaFuncao(funcao){
    funcao();
} 


// Arrow Function
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
}


// Dentro de um objeto
const pessoa = {
    // podemos declarar dessa forma tradicional
    falar: function(){
        console.log("Estou falando... ");
    },
    // ou podemos declarar dessa forma mais nova
    falando(){
        console.log("Estou falando");
    }

}