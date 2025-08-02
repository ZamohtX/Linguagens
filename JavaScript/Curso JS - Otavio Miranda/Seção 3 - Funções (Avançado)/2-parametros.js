

// Parametros da função
function funcao(a,b,c){
    console.log(arguments); // todos os argumentos enviados numa função vão ser guardados na variavel arguments,
    let total = 0;
    for (let argumento of arguments){ // podemos extrair os elementos dentro de arguments e fazermos oq quisermos
        total += argumento;
    }
    console.log(total, a, b, c); 
}

    // Caso o numero de parametros esperados for menor que o numero de parametros enviados, os que sobrarem terão valor undefined

funcao(1,2,45,6,7,8,9,9); 


function soma(a,b=3, c=3){ // definindo um valor padrao para um parametro (forma nova)
    b = b || 2; // definindo um valor padrão para um parametro (forma antiga)
}

soma(1, undefined, 20) // quando usamos undefined obrigamos a função a usar o valor padrão definido para os parametros 


    // fazendo desestruturação nos parametros
function desestruturacao({nome, sobrenome, idade}){
    console.log(nome, sobrenome, idade); 
}
    // Capturando um numero indefinido de argumentos, todo o resto sera guardado na variavel numeros
function conta(operador, acumulador, ...numeros){
    console.log(operador, acumulador, numeros); // numeros vai ser dum array com todos os numeros que sobraram
}

b 









































