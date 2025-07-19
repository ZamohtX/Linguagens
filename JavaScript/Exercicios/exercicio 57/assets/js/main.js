const form = document.querySelector('.main-form');
const masc = document.querySelector("#radio-masc");
const fem = document.querySelector("#radio-fem");


form.addEventListener("submit", (e)=> {
  e.preventDefault();
  // Validação
  if ( !masc.checked && !fem.checked) {
    mostrarMensagemErro('Marque uma das alternativas', 5000)
    return;
  } 
  alert('ok')
})




function mostrarMensagemErro(mensagem, tempo) {
  const mensagemErro = document.getElementById('mensagem-erro');
  mensagemErro.textContent = mensagem;
  mensagemErro.classList.add('mostrar');

  setTimeout(() => {
    mensagemErro.classList.remove('mostrar');
  }, tempo);
}