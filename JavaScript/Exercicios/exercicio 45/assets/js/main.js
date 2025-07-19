/*
'''  Crie um programa que faça o computador jogar Jokenpô com o usuario.'''

*/

const pedra = document.querySelector(".pedra");
const papel = document.querySelector(".papel");
const tesoura = document.querySelector('.tesoura');
const div = document.querySelector(".div-resultado");



pedra.addEventListener('click', (e)=> {
  limpaTela(div);
  const jogador = 'pedra';  
  const comp = numComp();
  resultado(jogador, comp);
})
papel.addEventListener("click", (e)=> {
  limpaTela(div);
  const jogador = 'papel';
  const comp = numComp();
  resultado(jogador, comp);
})
tesoura.addEventListener("click", (e)=> {
  limpaTela(div);
  const jogador = 'tesoura';
  const comp = numComp();
  resultado(jogador, comp);
})

function criaResultado(jogador, computador, result) {
  const resultado = document.createElement('h4');
  resultado.style.textAlign = 'center';
  div.appendChild(resultado);
  if (result === 'empate') resultado.innerHTML = `EMPATE!!<br>Você jogou ${jogador.toUpperCase()} e o computador jogou ${computador.toUpperCase()}<br>Vamos jogar novamente?`
  if (result === 'derrota') resultado.innerHTML = `Você PERDEU!!! :( <br> Você jogou ${jogador.toUpperCase()} e o computador jogou ${computador.toUpperCase()}<br>Vamos jogar novamente?`
  if (result === 'vitoria') resultado.innerHTML = `Você GANHOUUU!! PARABÉNS <br>Você jogou ${jogador.toUpperCase()} e o computador jogou ${computador.toUpperCase()}<br>Vamos jogar novamente? `
}

function resultado(jogador, computador) {
  if (jogador === computador) criaResultado(jogador, computador, 'empate');
  if (jogador === 'pedra' && computador === 'tesoura') criaResultado(jogador, computador, 'vitoria');
  if (jogador === 'tesoura' && computador === 'papel') criaResultado(jogador, computador, 'vitoria');
  if (jogador === 'papel' && computador === 'pedra') criaResultado(jogador, computador, 'vitoria');
  if (jogador === 'pedra' && computador === 'papel') criaResultado(jogador, computador, 'derrota');
  if (jogador === 'papel' && computador === 'tesoura') criaResultado(jogador, computador, 'derrota');
  if (jogador === 'tesoura' && computador === 'pedra') criaResultado(jogador, computador, 'derrota');
}


function numComp(){
  const comp = Math.floor((Math.random() * (3 - 1 +1 )) + 1);
  if (comp === 1) return 'pedra';
  if (comp === 2) return 'papel';
  if (comp === 3) return 'tesoura'
}


function limpaTela(e){
  while(e.firstChild) {
    e.removeChild(e.firstChild);
  }
}