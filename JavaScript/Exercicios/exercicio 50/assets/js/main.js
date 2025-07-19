

const form = document.querySelector(".main-form");
const num = document.querySelector("#num")
const titulo = document.querySelector('.titulo');
const div = document.querySelector('.div-resultado');
const calcular = document.querySelector(".calcular");
const numArray = [];

form.addEventListener('submit', (e)=> {
  e.preventDefault();
  limpaTela(div);
  const adicionaNum = (num)=> {
    if (num % 2 === 0) numArray.push(num);
  }
  adicionaNum(Number(num.value));
  const soma = () => {
    let somaTotal = 0;
    for (let num of numArray) {
      somaTotal += num;
    }
    return somaTotal;
  }
  const somaTotal = soma();
  calcular.addEventListener('click', (e)=> {
    limpaTela(div);
    const resultado = document.createElement('h4');
    resultado.style.textAlign = 'center';
    div.appendChild(resultado);
    resultado.innerHTML = `A soma dos valores pares digitados foi ${somaTotal}`
  })
})

function limpaTela(e) {
  while(e.firstChild) {
    e.removeChild(e.firstChild);
  }
}

