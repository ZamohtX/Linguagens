const form = document.querySelector(".main-form");
const num = document.querySelector(".numero");
const div = document.querySelector(".div-resultado");


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const p = document.createElement("p");
    div.appendChild(p);
    let dobro = Number(num.value) * 2;
    let triplo = Number(num.value) * 3;
    let raiz = Number(num.value) ** (1/2);
    p.innerHTML = `O dobro de ${num.value} é ${dobro} <br>`;
    p.innerHTML += `O triplo de ${num.value} é ${triplo} <br>`;
    p.innerHTML += `A raiz de ${num.value} é ${raiz}`;
})