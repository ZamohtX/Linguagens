//            Objeto Date

/* const data = new Date();          -> 01/01/1970 Timestamp unix*/ 

// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(0 + tresHoras + umDia);
//console.log(data.toString());


//      Data e Hora Atual
const horaAtual = new Date();
console.log(horaAtual);
                          /* OU */
console.log(Date.now())

//      Data especifica
const data = new Date(2004, 3, 12, 14, 20, 30, 999); // ano, mes, dia, hora, minuto, segundo, milisegundo
console.log(data.toString());
                          /* OU */
const data1 = new Date('2019-04-20 20:20:59.100');
console.log(data1.toString());

//     Obter o Numero do Dia
console.log('Dia', data.getDate());

//     Obter o Mês
console.log("Mês", data.getMonth() + 1); // mes comeca do zero
console.log("Ano", data.getFullYear());
console.log("Hora", data.getHours());
console.log("Min", data.getMinutes());
console.log("Seg", data.getSeconds());
console.log("ms", data.getMilliseconds());
console.log("Dia Semana", data.getDay());// 0- domingo / 6- sabado
console.log(data.toString());

//    Função que formata Data

function zeroEsquerda(num) {
  return (num>=10)? num: `0${num}`
}

function formataData (data) {
  const dia = zeroEsquerda(data.getDate());
  const mes = zeroEsquerda(data.getMonth() + 1);
  const ano = zeroEsquerda(data.getFullYear());
  const hora = zeroEsquerda(data.getHours());
  const min = zeroEsquerda(data.getMinutes());
  const seg = zeroEsquerda(data.getSeconds());
}
const dataa = new Date();
const dataBrasil = formartaData(dataa);
console.log(dataBrasil);