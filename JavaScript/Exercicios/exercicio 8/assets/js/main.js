const form = document.querySelector('.main-form');
const num = document.querySelector('.numero');
const div = document.querySelector(".div-resultado");


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const n = Number(num.value);
    const p = document.createElement('p');
    div.appendChild(p);
    p.innerHTML = `A medida de ${num.value}m correspode a ${n / 1000}km, ${n / 100}hm, ${n / 10}dam, ${n*10}dm, ${n*100}cm e ${n*1000}mm.`
})