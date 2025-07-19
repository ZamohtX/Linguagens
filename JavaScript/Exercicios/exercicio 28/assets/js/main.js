const form = document.querySelector(".main-form");


form.addEventListener('submit', (e)=> {
  e.preventDefault();
  const div = document.querySelector(".div-resultado");
  limpaTela(div);

  const boasVindas = document.createElement("h4");
  div.appendChild(boasVindas)
  boasVindas.style.textAlign = 'center'
  boasVindas.innerHTML = `Vou pensar em um número de 0 a 5.<br>
                        Tente Advinhar...` 
  setTimeout(function() {
    const label = document.createElement("label");
    const input = document.createElement('input');
    const button = document.createElement('input');
    const divResultado = document.createElement('div');
    input.classList.add("valor");
    input.type = 'number';
    button.type = 'button';
   
    button.value = 'Enviar';
    label.innerHTML = `Em que número eu pensei?`
    label.style.textAlign = 'center'
    div.appendChild(label);
    div.appendChild(input);
    div.appendChild(button);
    div.appendChild(divResultado);
    button.onclick = function() {
      limpaTela(divResultado);
      setTimeout(() => {
        const computador = Math.floor(Math.random() * (5 - 0 + 1)) + 0;
        const jogador = Number(input.value);
        const resultadoTela = document.createElement("h4");
        resultadoTela.style.textAlign = 'center';
        divResultado.appendChild(resultadoTela);
        console.log(computador)
        if (computador === jogador ) {
          resultadoTela.innerHTML = `Parabéns!!! Você <strong>VENCEU</strong> `;
        } else {
          resultadoTela.innerHTML = `Tente Novamente!!! Você <strong>PERDEU</strong> `;
        }
      },500) 
    }
  },1000)



})


function limpaTela(elementoPai) {
  while (elementoPai.firstChild) {
    elementoPai.removeChild(elementoPai.firstChild);
  }
}