//              Validação de CPF

// 052.390.564-55
// 071.568.334-99

/*   052.390.564 -> Mutiplica cada numero por uma sequecina regressiva de 10 a 2
    11 - (total % 11) = Primeiro Digito (se for maior que 9 coloca como 0
        
    052.390.564-(PrimeiroDigito) -> repete o processo anterior, mas a sequencia comeca pelo 11
    11 - (total % 11) = Primeiro Digito (se for maior que 9 coloca como 0
*/



function validaCPF(cpf) {
    let cpfCompleto = cpf;
    const cpfLimpo = cpfCompleto.replace(/\D+/g, '');
    const cpfArrayOriginal = Array.from(cpfLimpo);
    let digitosVerificacao = []; 
    let digitosVerificaOriginal = [Number.parseFloat(cpfArrayOriginal[9]), Number.parseFloat(cpfArrayOriginal[10])]
    
    while (digitosVerificacao.length < 2) {
        
        if (digitosVerificacao.length === 0) {
            const cpfArray = [...cpfArrayOriginal];
            const digiVerific = cpfArray.splice(-2,2);
            const primeiroDigito = verificaDigito(10, cpfArray);
        }   else {
            let cpfTemp = cpfLimpo.slice(0,9);
            let cpfCompleto2 = cpfTemp +  `${digitosVerificacao[0]}`;
            const cpfArrayCUmDig = Array.from(cpfCompleto2);
            const segundodigito = verificaDigito(11, cpfArrayCUmDig);
            
            
        }
    }
    if (digitosVerificaOriginal[0] !== digitosVerificacao[0] || digitosVerificaOriginal[1] !== digitosVerificacao[1]) return false;
    return true


    function verificaDigito(numMultiplica, cpfArray) {
        let multiplica = numMultiplica
        let cpfArrayMultiplicado = cpfArray.map((valor) => {
            valor = valor * multiplica;
            multiplica = multiplica - 1;
            return valor
        })
        let cpfTotal = cpfArrayMultiplicado.reduce((acumulador, valor) => {
            acumulador += valor
            return acumulador;
        }, 0)
        let digito = 11 - (cpfTotal % 11)
        digitosVerificacao.push(digito)
        return digito
    }
}


let cpf = '123.089.624-45'
let validaado = validaCPF(cpf)
console.log()
if (cpf) {
    console.log(`O CPF ${cpf} é valido`);
} else {
    console.log(`O CPF ${cpf} é invalido`)
}
console.log()












