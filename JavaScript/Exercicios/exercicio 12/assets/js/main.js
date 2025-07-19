const form = document.querySelector('.main-form');
const preco = document.querySelector(".preco");
const desconto = document.querySelector(".desconto");
const div = document.querySelector('.div-resultado');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const precofinal =(Number(preco.value) - Number(preco.value) * (Number(desconto.value)/100)).toFixed(2);
    const p = document.createElement("p");
    div.appendChild(p);
    p.innerHTML = `O produto que custava R$${Number(preco.value).toFixed(2)}, na promoção de ${desconto.value}% de desconto, vai custar R$${precofinal}. `
})