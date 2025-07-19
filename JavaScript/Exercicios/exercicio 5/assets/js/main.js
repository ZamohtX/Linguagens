const form = document.querySelector('.main-form');
const num = document.querySelector(".numero");
const div = document.querySelector(".div-resultado");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const p = document.createElement('p');
    div.appendChild(p);
    p.innerHTML = `O número "${num.value}" tem o número "${Number(num.value) - 1}" como seu antecessor e "${Number(num.value) + 1}" como seu sucessor`;
})