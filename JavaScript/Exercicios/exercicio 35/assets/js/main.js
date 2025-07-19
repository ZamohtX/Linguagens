
const form = document.querySelector(".main-form");
const hipo = document.querySelector(".hipo");
const ca = document.querySelector(".ca");
const co = document.querySelector(".co");
const div = document.querySelector(".div-resultado");

form.addEventListener('submit', (e) => {
  e.preventDefault();
  LimpaTela(div);
  const resultado = document.createElement("h4");
  resultado.style.textAlign = 'center';
  div.appendChild(resultado)
  const lados = [Number(hipo.value),Number(ca.value),Number(co.value)]
  if (lados[0] < lados[1] + lados[2] && lados[1] < lados[0] + lados[2] && lados[2] < lados[0] + lados[1]) {
    resultado.innerHTML = `As retas informadas PODEM formar um triângulo.`;
  } else {
    resultado.innerHTML = `As retas informadas NÃO PODEM formar um triângulo.`;
  }
})


function LimpaTela(e) {
  while (e.firstChild) {
    e.removeChild(e.firstChild)
  }
}