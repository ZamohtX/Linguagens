const form = document.querySelector('.main-form');
const valor = document.querySelector(".valor");
const div = document.querySelector(".div-resultado");


form.addEventListener("submit", (e) => {
    e.preventDefault();

    const p = document.createElement('p');
    div.appendChild(p);
    p.innerHTML = `Você digitou o valor ${valor.value} e sua porção inteira é ${porcInteira(valor.value)}`;
})

function porcInteira(num) {
    let x = '';
    for (let c of String(num)) {
        if (c === '.') break
        x = x + c;
    }
    return x;
}
