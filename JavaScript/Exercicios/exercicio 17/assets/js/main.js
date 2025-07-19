const form = document.querySelector(".main-form");
const ca = document.querySelector(".cateto-adjacente");
const co = document.querySelector(".cateto-oposto");
const div = document.querySelector('.div-resultado');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const hi = (((Number(ca.value) ** 2) + (Number(co.value)**2)) ** (1/2)).toFixed(2);
    const p = document.createElement('p');
    div.appendChild(p);
    p.innerHTML = `A hipotenusa de um tringulo de catetos ${ca.value} e ${co.value} é igual a ${hi}`;
})