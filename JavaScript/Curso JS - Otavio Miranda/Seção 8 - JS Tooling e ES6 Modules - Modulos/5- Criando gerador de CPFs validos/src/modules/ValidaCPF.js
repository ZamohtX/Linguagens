//              Validação de CPF

// 052.390.564-55
// 071.568.334-99

/*   052.390.564 -> Mutiplica cada numero por uma sequecina regressiva de 10 a 2
    11 - (total % 11) = Primeiro Digito (se for maior que 9 coloca como 0
        
    052.390.564-(PrimeiroDigito) -> repete o processo anterior, mas a sequencia comeca pelo 11
    11 - (total % 11) = Primeiro Digito (se for maior que 9 coloca como 0
*/

export default class ValidaCPF {
    constructor(cpfEnviado){
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: false,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        })
    }

    eSequencia(){
        return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo;
    }

    geraNovoCpf(){
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidaCPF.geraDigito(cpfSemDigitos);
        const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1);
        this.novoCpf = cpfSemDigitos + digito1 + digito2;
    }

    static geraDigito(cpfSemDigitos) {
        let total = 0;
        let reverso = cpfSemDigitos.length + 1;

        for (let stringNumerica of cpfSemDigitos){
            total += reverso * Number(stringNumerica);
            reverso--;
        }
        const digito = 11 - (total % 11);
        return digito > 9? '0' : String(digito);
    }

    valida() {
        if (!this.cpfLimpo) return false;
        if (typeof this.cpfLimpo !== 'string') return false;
        if (this.cpfLimpo.length !== 11) return false;
        if (this.eSequencia()) return false;
        this.geraNovoCpf();

        return this.novoCpf === this.cpfLimpo;     
    }
}










