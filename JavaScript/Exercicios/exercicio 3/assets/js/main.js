const form = document.querySelector('.main-form');
const num1 = document.querySelector('.num1');
const num2 = document.querySelector('.num2');
const div = document.querySelector('.div-resultado');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    soma = Number(num1.value) + Number(num2.value);
    const p = document.createElement('p');
    p.classList.add("resultado-soma");
    div.appendChild(p);
    p.innerHTML = `A soma entre ${num1.value} e ${num2.value} é igual a ${String(soma)}`;
})