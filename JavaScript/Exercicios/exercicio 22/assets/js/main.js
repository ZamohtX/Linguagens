const form = document.querySelector('.main-form');
const nome = document.querySelector('.nome');
const div = document.querySelector('.div-resultado');


form.addEventListener("submit", (e) => {
    e.preventDefault();
    const p = document.createElement('p');
    div.appendChild(p);
    const nomeArray = (nome.value).trim().split(' ')
    p.innerHTML = `Analisando seu nome...<br>`;
    p.innerHTML += `Seu nome em maiusculas é ${(nome.value).toUpperCase()}.<br>
                    Seu nome em minusculas é ${(nome.value).toLowerCase()}.<br>
                    Seu nome tem ao todo ${nome.value.length - Number(contarCaractere(nome.value, ' '))} letras.<br>
                    Seu primeiro nome é ${nomeArray[0]} e ele tem ${nomeArray[0].length} letras.`
})


function contarCaractere(string, caractere) {
    return string.split('').reduce((acc, char) => char === caractere ? acc + 1 : acc, 0);
}
