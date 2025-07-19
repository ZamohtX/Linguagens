/*
#: Crie um programa que leia duas notas de um aluno e calcule sua média, mostrando uma mensagem no final, de acordo com a média atingida:
#- Média abaixo de 5.0: REPROVADO
#- Média entre 5.0 e 6.9: RECUPERAÇÃO
#- Média 7.0 ou superior: APROVADO
 */

const form = document.querySelector('.main-form');
const n1 = document.querySelector('.n1');
const n2 = document.querySelector(".n2");
const div = document.querySelector(".div-resultado");

form.addEventListener('submit', (e)=> {
  e.preventDefault();
  limpaTela(div);
  const resultado = document.createElement("h4");
  resultado.style.textAlign = 'center'
  div.appendChild(resultado);
  const media = ((Number(n1.value) + Number(n2.value)) / 2).toFixed(2);
  resultado.innerHTML = `Tirando as notas ${n1.value} e ${n2.value}, a média é igual a ${media}<br>`
  if (media < 5) resultado.innerHTML += `O aluno está REPROVADO.`;
  if (media >= 5 && media < 7) resultado.innerHTML += `O aluno está em RECUPERAÇÃO`;
  if (media >= 7) resultado.innerHTML += `O aluno está APROVADO`;
})


function limpaTela(e){
  while(e.firstChild) {
    e.removeChild(e.firstChild);
  }
}