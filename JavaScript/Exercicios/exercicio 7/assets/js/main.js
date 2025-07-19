const form = document.querySelector('.main-form');
const num1 = document.querySelector('.num1');
const num2 = document.querySelector('.num2');
const div = document.querySelector(".div-resultado");


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const media = ((Number(num1.value) + Number(num2.value)) / 2).toFixed(2);
    const p = document.createElement('p');
    div.appendChild(p);
    p.innerHTML = `A media de ${num1.value} e ${num2.value} é igual a ${media}` 
})