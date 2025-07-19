function alfanumerico (valor) {
    const v = valor
    numeros = ['1','2','3','4','5','6','7','8','9'];
    letras = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','u','z',
            'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    
    let temNumero = false;
    let temLetra  = false;
    for ( let x of valor) {
        for (let n of numeros) {
            if (x === n) temNumero = true;
        }
        for (let l of letras) {
            if (x === l) temLetra = true;
        }
    }
    if (temLetra && temNumero) return true;
    return false;

}

