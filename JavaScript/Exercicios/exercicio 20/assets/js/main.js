const form = document.querySelector('.main-form');
const aluno1 = document.querySelector('.aluno-1');
const aluno2 = document.querySelector(".aluno-2");
const aluno3 = document.querySelector('.aluno-3');
const aluno4 = document.querySelector('.aluno-4');
const div = document.querySelector(".div-resultado");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    const array = [aluno1.value, aluno2.value, aluno3.value, aluno4.value];
    const arrayEmbaralhado = embaralha(array);
    const p = document.createElement('p');
    div.appendChild(p);
    p.innerHTML = `A ordem será: `;
    let i = 0;
    while (true) {
        if (i > arrayEmbaralhado.length - 1) break
        if (i === arrayEmbaralhado.length - 1){
            p.innerHTML += ` ${arrayEmbaralhado[1]}`;
        } else {
            p.innerHTML += ` ${arrayEmbaralhado[i]} ->`;
        }
        i++
    }
})



function embaralha(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i+1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}