const form = document.querySelector(".main-form");
const real = document.querySelector(".numero");
const div = document.querySelector('.div-resultado');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    let dolar = Number(real.value) * 5.48;
    const p = document.createElement("p");
    div.appendChild(p);
    p.innerHTML = `R$${real.value} é igual a $${dolar}USD `
})