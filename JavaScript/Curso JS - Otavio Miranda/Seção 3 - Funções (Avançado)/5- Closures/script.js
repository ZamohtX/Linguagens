//                  Closures


function retornaFuncao() {
    const nome = 'Thomaz';
    return function () {
        return nome;
    }
}

const funcao = retornaFuncao();
console.log(funcao);























