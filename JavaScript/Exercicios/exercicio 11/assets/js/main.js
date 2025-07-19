const form = document.querySelector(".main-form");
const larg = document.querySelector('.comp-parede');
const alt = document.querySelector(".alt-parede");
const div = document.querySelector(".div-resultado");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const area = (Number(larg.value) + Number(alt.value));
    const rendTinta = 1/2;
    const totTinta = area * rendTinta;
    const p = document.createElement('p');
    div.appendChild(p);
    p.innerHTML = `Para pintar uma parede de ${larg.value}m x ${alt.value}m<br>são necessários ${totTinta} litros de tinta.`;

})
