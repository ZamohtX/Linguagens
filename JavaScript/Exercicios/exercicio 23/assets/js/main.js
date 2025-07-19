const form = document.querySelector('.main-form');
const num = document.querySelector('.num');
const div = document.querySelector('.div-resultado');


form.addEventListener("submit", (e) => {
    e.preventDefault();
    const n = Number(num.value);
    const p = document.createElement('p');
    div.appendChild(p);
    p.innerHTML = `Unidade: ${(n / 1) % 10 }<br>
                   Dezena: ${(n / 10) % 10 }<br>
                   Centena: ${(n / 100) % 10 }<br>
                   Milhar: ${(n / 1000) % 10 }<br>`;
   })


