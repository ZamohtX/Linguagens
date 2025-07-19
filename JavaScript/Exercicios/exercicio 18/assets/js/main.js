const form = document.querySelector(".main-form");
const ang = document.querySelector(".ang");
const div = document.querySelector('.div-resultado');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const angRad = Number(ang.value) * (Math.PI / 180);
    const sen = Math.sin(angRad).toFixed(2);
    const cos = Math.cos(angRad).toFixed(2);
    const tg = Math.tan(angRad).toFixed(2);

    const p = document.createElement('p');
    div.appendChild(p);
    p.innerHTML = `O seno de ${ang.value}º é igual a ${sen}<br>
                  O cosseno de ${ang.value}º é igual a ${cos}<br>
                  A tangente de ${ang.value}º é igual a ${tg}<br>  `;
})