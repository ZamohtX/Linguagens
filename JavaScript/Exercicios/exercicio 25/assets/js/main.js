const form = document.querySelector('.main-form');
const nome = document.querySelector('.nome');
const div = document.querySelector('.div-resultado');


form.addEventListener("submit", (e) => {
    e.preventDefault();
    const p = document.createElement('p');
    div.appendChild(p);
    p.innerHTML = `O nome possui 'Silva'? ${nome.value.toUpperCase().trim().includes(' SILVA ')}`;
})


