//                        Métodos úteis para Promise

/*
        Promise.all
        Promise.race
        Promise.resolve 
        Promise.reject
 */

function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") {
      reject(false);
      return;
    }

    setTimeout(() => {
      resolve(msg.toUpperCase() + " - Passei na promise");
    }, tempo);
  });
}

// Promise.all
/*  Vai receber um array com promessas ou valores resolvidos e
        vai retornar um array com tudo resolvido imediatamente*/
const promises = [
  /*Cada promise tem um tempo especifico proprio de execução,
     sendo assim, ele vai executar todas normalmente e só vai retornar
      no final com tudo ja completamente resolvido*/
  "Primeiro Valor",
  esperaAi("Promise 1", 3000),
  esperaAi("Promise 2", 500),
  esperaAi("Promise 3", 1000),
  // Se qualquer uma promessa aqui dentro der erro, tudo dentro do array vai ser recusado imediatamente
//   esperaAi(1000, 1000),
  "Outro valor",
];

// Promise.all(promises)
//   .then(function (valor) {
//     console.log(valor);
//   })
//   .catch(function (erro) {
//     console.log(erro);
//   });



// Promise.race
  /* Vai percorrer o array até encontrar um valor que seja aceito ou recusado,
  vai retornar e parar a execução na hora.  */
const promises2 = [
  "Primeiro Valor", // vai ser entregue pois é o primeiro valor resolvido
  esperaAi("Promise 1", 3000), // vai ser entregue caso não exista nenhum outro valor competindo, pois é a ultima das promesas a terminar a execução
  esperaAi("Promise 2", 500), // vai ser entregue caso não exista 'Primeiro valor' e 'Outro valor, pois é a promessa que vai terminar a execução primeiro
  esperaAi("Promise 3", 1000), // vai ser entregue caso não exista 'Primeiro valor, 'Outro valor e 'Promise 2, pois é a seria a promessa q terminaria a execução antes
  esperaAi(1000, 1000),
  "Outro valor", // vai ser entregue caso não exista 'Primeiro valor, pois as outras promessas ainda estarão rodando
];

// Promise.race(promises2)
//   .then(function (valor) {
//     console.log(valor);
//   })
//   .catch(function (erro) {
//     console.log(erro);
//   });


// Promise.resolve
    // Função para simular uma pagina em cache
function baixaPagina() {
  const emCache = true;
    // Condição para pagina
  if (emCache) {
          /* Caso a condição for verdadeira, vamos retornar uma promessa resolvida 
          que vai ser capturada em then*/
    return Promise.resolve('Pagina em cache');
  } else {
    return esperaAi('Baixei a pagina', 3000);
  }
}

baixaPagina()
  // A promessa resolvida veio parar em then para ser utilizada
  .then(dadosPagina => {
    console.log(dadosPagina);
  })
  .catch(erro => console.log(erro));
  


// Promise.reject
function baixaPagina() {
  const emCache = true;

  if (emCache) {
        /* Caso a condição for verdadeira, vamos retornar uma promessa rejeitada 
        que vai ser capturada em catch*/
    return Promise.reject('Pagina em cache');
  } else {
    return esperaAi('Baixei a pagina', 3000);
  }
}

baixaPagina()
  .then(dadosPagina => {
    console.log(dadosPagina);
  })
  // A promessa rejeitada veio parar em catch para ser utilizada
  .catch(erro => console.log('ERRO', erro));