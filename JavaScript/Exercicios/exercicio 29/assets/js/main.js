const form = document.querySelector('.main-form');
const velocidade = document.querySelector(".velocidade");
const div = document.querySelector(".div-resultado");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  limpaTela(div);
  const h4 = document.createElement("h4");
  h4.style.textAlign = 'center';
  div.appendChild(h4);
  if (Number(velocidade.value) <= 80) {
    h4.innerHTML = `Tenha um bom dia, dirija com segurança`
  }   else {
    h4.innerHTML = `MULTADO!!! <br> Você excedeu o limite de velocidade que é de 80Km/h<br>
                    Você foi multado em R$${(Number(velocidade.value) - 80) * 7},00   ` 
  }
})

function limpaTela(el) {
  while (el.firstChild) {
    el.removeChild(el.firstChild)
  }
}

function removerTodosFilhos(elementoPai) {
  while (elementoPai.firstChild) {
    elementoPai.removeChild(elementoPai.firstChild);
  }
}
