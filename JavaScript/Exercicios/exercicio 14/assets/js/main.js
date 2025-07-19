const form = document.querySelector(".main-form");
const tempCelcius = document.querySelector(".temperatura");
const div = document.querySelector(".div-resultado");


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const tempFarenheit = (1.8 * Number(tempCelcius.value)) + 32;
    const p = document.createElement('p');
    div.appendChild(p);
    p.innerHTML = `A tempertura ${tempCelcius.value}ºC corresponde a ${tempFarenheit}ºF`;
})