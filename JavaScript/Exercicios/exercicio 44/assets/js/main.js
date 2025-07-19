/*
''' : Elabore um programa que calcule o valor a ser pago por um produto, considerando o seu preço normal
 e condição de pagamento:
- à vista dinheiro/cheque: 10% de desconto
- à vista no cartão: 5% de desconto
- em até 2x no cartão: preço formal
- 3x ou mais no cartão: 20% de juros'''
*/

const form = document.querySelector(".main-form");
const produto = document.querySelector(".preco");
const div = document.querySelector('.div-resultado');

const cartao = (num) => {
  limpaTela(div);
  const resultado = document.createElement("h4");
  resultado.style.textAlign = 'center'
  div.appendChild(resultado)

  const preco = Number(produto.value);
  var precoFinal;
  if (num === 1) {
    precoFinal =( preco  - (preco*(10/100))).toFixed(2);
    resultado.innerHTML = `O valor a vista em dinheiro tem 10% de desconto<br>`;
    resultado.innerHTML +=`O valor final é de R$${precoFinal}`;
  }
  if (num === 2){
    precoFinal = (preco - (preco*(5/100))).toFixed(2);
    resultado.innerHTML = `O valor a vista no cartão tem 5% de desconto<br>`
    resultado.innerHTML +=`O valor final é de R$${precoFinal}`;
  } 
  if (num === 3) {
    precoFinal = preco.toFixed(2);
  
    resultado.innerHTML =`O valor final é de R$${precoFinal}<br> que serão pagos em 2x de R$${(precoFinal/2).toFixed(2)}`
  }
  if (num === 4){
    precoFinal = (preco + (preco*(20/100))).toFixed(2);
    resultado.innerHTML = `Quantidade de parcelas`
    const parcelas = document.createElement("input");
    parcelas.type = 'number';
    resultado.style.marginBottom = '0px'
    parcelas.style.marginTop = '0px';
    div.appendChild(parcelas);
    const btnParcelas = document.createElement("input");
    btnParcelas.type = 'button';
    btnParcelas.value = 'Enviar'
    btnParcelas.classList.add = 'btn-send';
    div.appendChild(btnParcelas);
    btnParcelas.onclick = () => {
      limpaTela(div);
      const resultadoTela = document.createElement('h4');
      resultadoTela.style.textAlign = 'center';
      div.appendChild(resultadoTela);
      const qtParcelas = Number(parcelas.value);
      const valorParcelas =(Number(precoFinal) / qtParcelas).toFixed(2);
      resultadoTela.innerHTML = `O valor final é de R$${precoFinal}<br> que serão pagos em ${qtParcelas}x de R$${valorParcelas}`
    }  
  }  
}



function limpaTela(e) {
  while(e.firstChild) {
    e.removeChild(e.firstChild);
  }
}

