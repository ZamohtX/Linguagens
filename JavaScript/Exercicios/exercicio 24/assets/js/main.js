const form = document.querySelector('.main-form');
const cidade = document.querySelector('.cidade');
const div = document.querySelector('.div-resultado');


form.addEventListener("submit", (e) => {
    e.preventDefault();
    const p = document.createElement('p');
    div.appendChild(p);
    p.innerHTML = `A cidade começa com 'Santo'? ${cidade.value.trim().toUpperCase().slice(0,5) === 'SANTO'}`;
   })


