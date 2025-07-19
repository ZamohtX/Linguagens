/* Analisador de Palindromo  */

const form = document.querySelector(".main-form");
const frase = document.querySelector('#frase');
const div = document.querySelector(".div-resultado");

form.addEventListener('submit', (e)=>{
  e.preventDefault();
  limpaFilhos(div);

  const resultado = document.createElement('h4');
  resultado.style.textAlign = 'center';
  div.appendChild(resultado);
  if (analisaPalindromo(frase.value)) {
    resultado.innerHTML = `${frase.value} É um palíndromo`;
  } else {
    resultado.innerHTML = `${frase.value} NÃO É um palíndromo`;
  }
});

function analisaPalindromo(f) {
  const frase = f.toUpperCase().trim();
  let fraseInvertida = '';
  for (let l = frase.length; l > 0; l--){
    fraseInvertida = fraseInvertida + frase[l-1];
  } 
  return frase === fraseInvertida;
}





function limpaFilhos(e) {
  while (e.firstChild){
    e.removeChild(e.firstChild)
  }
}