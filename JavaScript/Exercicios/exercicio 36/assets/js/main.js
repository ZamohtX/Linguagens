/*#Escreva um programa para aprovar o empréstimo bancário para a compra de uma casa.
#  Pergunte o valor da casa, o salário do comprador e em quantos anos ele vai pagar.
#  A prestação mensal não pode exceder 30% do salário ou então o empréstimo será negado.  */
const form = document.querySelector(".main-form");
const valor = document.querySelector(".valor");
const salario = document.querySelector(".salario");
const parcela = document.querySelector(".prest");
const div = document.querySelector(".div-resultado");



form.addEventListener('submit', (e) => {
  e.preventDefault();
  LimpaTela(div);
  const resultado = document.createElement("h4");
  resultado.style.textAlign = 'center';
  div.appendChild(resultado);

  const valorParcela = (Number(valor.value) / Number(parcela.value)).toFixed(2);
  if (valorParcela < (Number(salario.value) * 30/100)) {
    resultado.innerHTML = `Seu Financiamento foi APROVADO<br>
                          Para financiar um imovel de ${valor.value},00<br>
                          Serão necessarias ${parcela.value} parcelas de R$${valorParcela}`;
  } else {
    resultado.innerHTML = `Seu Financiamento foi NEGADO<br>
                          O valor da prestação ultrapassou 30% do seu salário<br>
                          Tente novamente com um número maior de prestações`
  }
  





})


function LimpaTela(e) {
  while (e.firstChild) {
    e.removeChild(e.firstChild)
  }
}