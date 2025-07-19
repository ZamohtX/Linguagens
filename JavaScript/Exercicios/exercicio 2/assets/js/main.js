const nome = document.querySelector(".input-name");
const form = document.querySelector('.main-form');
const div = document.querySelector(".div-resultado");


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const p = document.createElement('p');
    p.classList.add('resultado')
    div.appendChild(p);
    p.innerText = `Seja bem-vindo, ${nome.value}`
})
