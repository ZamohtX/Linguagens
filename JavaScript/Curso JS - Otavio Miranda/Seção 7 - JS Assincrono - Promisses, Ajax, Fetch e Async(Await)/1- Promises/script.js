//                                          Promises


/*                                     Codigo Assíncrono

          Na internet não temos ideia de quando o nosso codigo vai receber o dado que foi requisitado
        a um determinado serviço, como solução pra isso surgiram as funções de callback, que impedem 
        o codigo de ser executado até que o dado seja obtido, preservando assim a ordem de execução.

          As Promisses são alternativas para as funções de callback
*/

function rand(min, max){
        min *= 1000;
        max *= 1000;
        return Math.floor(Math.random() *(max-min) +min);
}

// function esperaAi(msg, tempo, callback){
//         setTimeout(() => {
//                 console.log(msg);
//                 if(callback) callback();
//         }, tempo);
// } 

// // Problema de ordem de execução
// esperaAi('Frase 1', rand(1,3));
// esperaAi('Frase 2', rand(1,3));
// esperaAi('Frase 3', rand(1,3));

// // Com Callback
// esperaAi('Frase 1', rand(1,3), function() {
//         esperaAi('Frase 2', rand(1,3), function() {
//                 esperaAi('Frase 3', rand(1,3));
//         });
// });

// Com Promise

   // Criando função com Promisse
function esperaAi(msg, tempo, ){
        // Criando a Promisse
                // Vai receber duas flags:
                /*
                        resolve - executa then()
                        reject - executa catch() e para a execução de then()
                */
        return new Promise((resolve, reject) => {
                        // Condição para capturar o erro com reject
                if (typeof msg !== String) reject(new Error("ERRO"))

                // Função para emular um tempo aleatorio
                setTimeout(() => {
                        // Quando chegar aqui significa que está tudo bem com o codigo e sem erros. Executando assim o then
                        resolve(msg); 
                }, tempo);
        });


} 
// Primeiro a ser exibido
        // then - vai receber a variavel dentro de resolve e vai executar um codigo
esperaAi('Frase 1', rand(1,3)).then((msg) => {
        console.log(msg);
        // o retorno vai chamar a proxima etapa do codigo
        return esperaAi('Frase 2', rand(1, 3))})
        .then((msg) => { // Esse then so vai ser executado apos a finalização do then anterior
                console.log(msg);
                // o retorno vai chamar a proxima etapa do codigo
                return esperaAi('Frase 3', rand(1,3));
        })
        .then((msg) => { // Esse then so vai ser executado apos a finalização do then anterior
                console.log(msg);
        })
        .then(() => { // Esse then so vai ser executado apos a finalização do then anterior
                console.log('Chegamos ao fim sem perder a ordem de execução');
        })
        // Then vai ser executado normalmente ate que seja encontrado um erro, então é catch é automaticamente executado e para then.
        .catch((erro) => { // catch vai ser executado se acontecer qualquer erro a cada etapa dos then
                console.log('ERRO', erro);
        });


















