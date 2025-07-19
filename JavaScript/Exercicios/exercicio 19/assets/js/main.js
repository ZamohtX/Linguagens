const form = document.querySelector(".main-form");
const aluno1 = document.querySelector('.aluno-1');
const aluno2 = document.querySelector('.aluno-2');
const aluno3 = document.querySelector('.aluno-3');
const aluno4 = document.querySelector('.aluno-4');
const div = document.querySelector('.div-resultado');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const alunos = [aluno1.value, aluno2.value, aluno3.value, aluno4.value]
    console.log(alunos)
    const rand =  Math.random()
    const randint = Math.floor((rand * (4 - 1+ 1)) + 1)
    console.log(rand)
    console.log(randint)
    const p = document.createElement('p');
    div.appendChild(p);
    p.innerHTML = `O aluno escolhido foi ${alunos[randint - 1 ]}`;
})