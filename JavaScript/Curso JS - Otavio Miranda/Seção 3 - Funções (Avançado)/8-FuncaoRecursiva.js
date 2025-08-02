/**
            Funções recursivas

    são funções que chamam elas mesmas até uma determinada flag de parada


 */

function contaNum(acumulador, max){
    if (acumulador < max){
        return contaNum(acumulador+1, max);
    }
    return acumulador;
}


console.log(contaNum(0, 10));