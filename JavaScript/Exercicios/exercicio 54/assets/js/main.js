/*
'''Crie um programa que leia o ano de nascimento de sete pessoas. 
No final, mostre quantas pessoas ainda não atingiram a maioridade e quantas já são maiores.'''*/

const form = document.querySelector(".main-form");
const titulo = document.querySelector('.titulo');
const nasc = document.querySelector("#nasc");
const div = document.querySelector(".div-resultado");
const btn = document.querySelector(".send");

const idadePessoas = [];
const data = new Date;
let contador = 1;
btn.onclick = () => {
  limpaFilhos(div);
  contador++;
  const idade =  data.getFullYear() - Number(nasc.value) ; 
  idadePessoas.push(idade);
  titulo.innerHTML = `Digite o ano de nascimento da ${contador}º pessoa`
  console.log(idadePessoas);
  
  if (idadePessoas.length === 7) {
    btn.value = 'Calcular';
    btn.onclick = ()=> {
      limpaFilhos(div);
      let adultos = 0;
      const resultado = document.createElement("h4");
      resultado.style.textAlign = 'center';
      div.appendChild(resultado);
      
      for (let a of idadePessoas) {
        if (a >= 18) adultos++;
      }
      resultado.innerHTML = `Ao todo temos ${adultos} pessoas maiores de idade<br> e ${idadePessoas.length - adultos} pessoas menores de idade.`
    }
  }
}

function limpaFilhos(e) {
  while(e.firstChild){
    e.removeChild(e.firstChild);
  }
}





