
function getDiaSemana (diaSemana) {
    let diaSemanaTexto;

    switch (diaSemana) {
    case 0:
        diaSemanaTexto = 'Domingo';
        return diaSemanaTexto;
    case 1:
        diaSemanaTexto = 'Segunda-Feira';
        return diaSemanaTexto;
    case 2:
        diaSemanaTexto = 'Terça-Feira';
        return diaSemanaTexto;
    case 3:
        diaSemanaTexto = 'Quarta-Feira';
        return diaSemanaTexto;
    case 4:
        diaSemanaTexto = 'Quinta-Feira';
        return diaSemanaTexto;
    case 5:
        diaSemanaTexto = 'Sexta-Feira';
        return diaSemanaTexto;
    case 6:
        diaSemanaTexto = 'Sabado';
        return diaSemanaTexto;
    default:
        diaSemanaTexto = 'Dia Inexistente';
    }
}

function getMesAno (mesAno) {
    let mesAnoTexto;

    switch (mesAno) {
    case 0:
        mesAnoTexto = 'Janeiro';
        return mesAnoTexto;
    case 1:
        mesAnoTexto = 'Fevereiro';
        return mesAnoTexto;
    case 2:
        mesAnoTexto = 'Março';
        return mesAnoTexto;
    case 3:
        mesAnoTexto = 'Abril';
        return mesAnoTexto;
    case 4:
        mesAnoTexto = 'Maio';
        return mesAnoTexto;
    case 5:
        mesAnoTexto = 'Junho';
        return mesAnoTexto;
    case 6:
        mesAnoTexto = 'Julho';
        return mesAnoTexto;
    case 7:
        mesAnoTexto = 'Agosto';
        return mesAnoTexto;
    case 8:
        mesAnoTexto = 'Setembro';
        return mesAnoTexto;
    case 9:
        mesAnoTexto = 'Outubro';
        return mesAnoTexto;
    case 10:
        mesAnoTexto = 'Novembro';
        return mesAnoTexto;
    case 11:
        mesAnoTexto = 'Dezembro';
        return mesAnoTexto;
    default:
        mesAnoTexto = 'Janeiro';
        return mesAnoTexto;
    }
}

function zeroEsquerda(num) {
    return (num>=10)? num: `0${num}`;
}



const data = new Date();
let diaSemana = data.getDay();
const diaSemanaTexto = getDiaSemana(diaSemana);

const diaMes = data.getDate();

const mesAno = getMesAno(data.getMonth());

const ano = data.getFullYear();

let horaMinuto = `${zeroEsquerda(data.getHours())}:${zeroEsquerda(data.getMinutes())}`

console.log(diaSemana, diaSemanaTexto);
console.log(horaMinuto);

const mostraHora = document.querySelector('.mostra-hora');
mostraHora.innerHTML = `${diaSemanaTexto}, ${diaMes} de ${mesAno} de ${ano}  <br>${horaMinuto}`














