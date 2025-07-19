const section = document.querySelector('.container');
const btnStart = document.querySelector(".btn-start");
const titulo = document.querySelector(".titulo");
const desc = document.querySelector('.desc');
const div = document.querySelector(".div-resultado");

btnStart.addEventListener('click', (e)=> {
  btnStart.remove()
  desc.innerHTML = `Pensei em um número. Faça sua tentativa`;
  const resp = document.createElement("input");
  resp.type = 'number';
  section.appendChild(resp);
  const btnSend = document.createElement("input");
  btnSend.type = 'button';
  btnSend.value = 'Enviar';
  btnSend.classList.add('btn-send');
  section.appendChild(btnSend);
  let venceu = false;
  let tentativas = 1;
  const resultado = document.createElement('h4');
  resultado.style.textAlign = 'center';
  div.appendChild(resultado);
  btnSend.addEventListener('click', (e)=> {
    desc.remove()
    if (venceu) {
      resp.remove()
      btnSend.remove()
      resultado.innerHTML = `PARABÉNNNSSSS!!!!! <br> Você acertou com ${tentativas} tentativas.`
    } else {
      const jogador = Number(resp.value);
      const computador = Math.floor( Math.random() * (10 - 0 +1 )) + 0;
      if (jogador === computador) venceu = true
      resultado.innerHTML = `Você ERROU :( <br>Tente Novamente`
     tentativas++
    }
    
  })



})


