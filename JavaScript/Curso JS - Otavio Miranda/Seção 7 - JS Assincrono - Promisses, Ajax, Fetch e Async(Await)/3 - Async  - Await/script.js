//                        Async / Await


/*         Async é uma palavra que coloca antes de declarar a função para permitir
          que possamos usar Await, que vai fazer com que a execução espere ate que a 
          promise seja resolvida
          
          A vantagem principal é a simplicidade da escrita, se assemelhandoa uma função normal*/


/* Estados das Promises
    Pending -> Pendente - Quando a promise é enviada e não foi retornada ainda
    Fullfiled -> Resolvida - Quando a promise retornada é aceita
    Rejected -> Rejeitada - Quando a promise retornada é rejeitada
*/


function rand(min=0, max=3) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") {
      reject('CAI NO ERRO');
      return;
    }

    setTimeout(() => {
      resolve(msg.toUpperCase() + " - Passei na promise");
    }, tempo);
  });
}

console.log()

// // Fazendo com o Modo padrao de encadeamento
// esperaAi('Fase 1', rand())
//   .then((valor) => {
//     console.log(valor);
//     return esperaAi('Fase 2', rand());
//   })
//   .then((fase) => {
//     console.log(fase);
//     return esperaAi('Fase 3', rand);
//   })
//   .then((fase) => {
//     console.log(fase);
//     return fase;
//   })
//   .then(fase => {
//     console.log('Terminamos na fase: ', fase)
//   })
//   .catch((erro) => console.log(erro))

console.log()



// Fazendo com Async e Await

  // Precisamos colocar async antes de function para permitir o uso do await
async function executa() {
    // Colocamos try para captura em catch qualquer erro que aconteça na execução
  try{
        // Colocamos await para fazer com que a execução espere que a promessa seja resolvida
    const fase1 = await esperaAi('Fase 1', rand());
    console.log(fase1);
        // Essa Fase só sera executada apos o termino da fase anterior devido ao uso do await
    const fase2 = await esperaAi('Fase 2', rand());
    console.log(fase2);
        // Essa Fase só sera executada apos o termino da fase anterior devido ao uso do await
    const fase3 = await esperaAi('Fase 3', rand());
    console.log(fase3);
        // Essa Fase só sera executada apos o termino da fase anterior devido ao uso do await
    console.log('Terminamos na fase:', fase3);
    // Catch vai capturar o erro na execução do try 
  } catch(erro) {
    console.log(erro);
  }
}
executa();




