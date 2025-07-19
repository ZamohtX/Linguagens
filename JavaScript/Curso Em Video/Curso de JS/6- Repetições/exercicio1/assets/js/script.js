


function contar() {
    let ini = document.querySelector('#txti');
    let fim = document.querySelector('#txtf');
    let passo = document.querySelector('#txtp');
    let res = document.querySelector('#res');
    
    if (ini.value.length === 0 || fim.value.length == 0 || passo.value.length === 0) {
        res.innerHTML = 'Impossivel contar';
    } else { 
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value);
        let f = Number(fim.value);
        let p = Number(passo.value);
        if (p <= 0) {
            window.alert('Passo invalido! Contando com Passo 1');
            p = 1;
        }
        if (i < f) {
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`;
            }
        } else {
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1f449}`;
            }
        }
        res.innerHTML += ` \u{1F3C1}`;
    }
}























