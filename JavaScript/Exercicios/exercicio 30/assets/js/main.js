const form = document.querySelector(".main-form");
const numero = document.querySelector('.numero');
const div = document.querySelector('.div-resultado');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  limpaTela(div);
  const h4 = document.createElement('h4');
  div.appendChild(h4);
  h4.style.textAlign = 'center';
  if (Number(numero.value) % 2 === 0) {
    h4.innerHTML = `O número ${numero.value} é PAR`
  } else {
    h4.innerHTML = `O número ${numero.value} é IMPAR`
  }
});



function limpaTela(el) {
  while (el.firstChild) {
    el.removeChild(el.firstChild);
  }
}