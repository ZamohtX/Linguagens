//                Escopo Lexico


const nome = 'Thomaz';

function falaNome() {
    const nome = 'Xavier';
    console.log(nome)
}
function usaFalaNome() {
    falaNome();
}
usaFalaNome();