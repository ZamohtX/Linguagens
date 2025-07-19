const form = document.querySelector(".main-form");
const salario = document.querySelector('.salario');
const aumento = document.querySelector(".aumento");
const div = document.querySelector('.div-resultado');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const salarioFinal =(Number(salario.value) + (Number(salario.value) * (Number(salario.value)/100 ))).toFixed(2);
    const p = document.createElement('p');
    div.appendChild(p);
    p.innerHTML = `O salário de R$${Number(salario.value).toFixed(2)} com o aumento de ${aumento.value}%, fica com o valor final de R$${salarioFinal}`;
})