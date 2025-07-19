const form = document.querySelector('.main-form');
const dias = document.querySelector(".dias");
const km = document.querySelector(".quilometragem");
const div = document.querySelector(".div-resultado");

const diaria = 60;
const bonusKm = 0.15; 

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const total =((Number(dias.value) * diaria) + (Number(km.value) * bonusKm)).toFixed(2);
    const p = document.createElement('p');
    div.appendChild(p);
    p.innerHTML = `O total a ser pago é R$${total}`;

})