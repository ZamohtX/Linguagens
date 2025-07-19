const form = document.querySelector('.main-form');
const frase = document.querySelector('.frase');
const letra = document.querySelector(".letra");
const div = document.querySelector('.div-resultado');


form.addEventListener("submit", (e) => {
    e.preventDefault();
    const p = document.createElement('p');
    div.appendChild(p);
    p.innerHTML = `A letra '${letra.value}' aparece ${contarOcorrencias(frase.value.toUpperCase(), letra.value.toUpperCase())} vezes na frase<br>
                A primeira letra ${letra.value} aparece na posição ${frase.value.toUpperCase().indexOf(letra.value.toUpperCase())}<br>
                A ultima letra ${letra.value} aparece na posição ${frase.value.toUpperCase().lastIndexOf(letra.value.toUpperCase())}`;
})


function contarOcorrencias(string, caractere) {
    return string.split('').reduce((acc, char) => char === caractere ? acc + 1 : acc, 0);
  }