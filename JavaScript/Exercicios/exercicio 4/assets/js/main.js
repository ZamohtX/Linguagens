const form = document.querySelector('.main-form');
const palavra = document.querySelector(".palavra")
const div = document.querySelector('.div-resultado');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const p = document.createElement('p');
    div.appendChild(p);
    p.innerHTML = `O tipo primitivo desse valor é "${typeof palavra.value}<br>"`;
    p.innerHTML += `Só tem espaços? ${palavra.value.trim() === ''}<br>`;
    p.innerHTML += `É um numero? ${!isNaN(palavra.value)}<br>`;
    p.innerHTML += `É alfabetico? ${/^[a-zA-Z]*$/.test(palavra.value)}<br>`;
    p.innerHTML += `É alfanumerico? ${alfanumerico(palavra.value)}<br>`;
    p.innerHTML += `Está em maiusculas? ${palavra.value === palavra.value.toUpperCase()}<br>`;
    p.innerHTML += `Está em minusculas? ${palavra.value === palavra.value.toLowerCase()}<br>`;
    p.innerHTML += `Está capitalizada? ${palavra.value === (palavra.value.trim()[0].toUpperCase() + palavra.value.trim().slice(1, palavra.value.length))}`
});




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

