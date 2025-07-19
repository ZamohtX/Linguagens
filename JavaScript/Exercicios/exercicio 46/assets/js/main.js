/*
'' 046: Faça um programa que mostre na tela uma contagem regressiva para o estouro de fogos de artifício, 
indo de 10 até 0, com uma pausa de 1 segundo entre eles.''' : Elabore um programa que calcule o valor a ser pago por um produto, considerando o seu preço normal
 e condição de pagamento:
- à vista dinheiro/cheque: 10% de desconto
- à vista no cartão: 5% de desconto
- em até 2x no cartão: preço formal
- 3x ou mais no cartão: 20% de juros'''

*/

const form = document.querySelector(".main-form");
const div = document.querySelector('.div-resultado');

form.addEventListener('submit', (e)=> {
  e.preventDefault();
  limpaTela(div);
  const resultado = document.createElement("h4");
  resultado.style.textAlign = 'center'
  div.appendChild(resultado);
  let contador = 10;
  const contagem = setInterval(() => {
    resultado.innerHTML = `${contador}`     
    contador--;
    if (contador === 0) {
      clearInterval(contagem);
      resultado.innerHTML = 'BUUMMM BOMM KATCHAU FUSHFUAS BOM BOM'
    }
  },1000)
})

function limpaTela(e) {
  while(e.firstChild) {
    e.removeChild(e.firstChild);
  }
}

