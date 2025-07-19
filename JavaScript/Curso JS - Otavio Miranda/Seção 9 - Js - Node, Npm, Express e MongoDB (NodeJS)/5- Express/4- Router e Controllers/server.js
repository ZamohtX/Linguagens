//                              Router e Controllers


    /*  
     As rotas são os links que acessamos no site, cada link tem um parametro: "meusite.com/parametro"
    
     Em um projeto real, são inumeras as rotas que temos, então guardar tudo em um unico arquivo seria muito bagunçado.
    Para manipular as rotas de maneira organizada, modularizamos as tarefas, usando controllers.

     Ao inves de colocar a função da rota logo na criação da rota, apenas invocamos o modulo controller criado pra aquela rota.

     Os Controllers são funções que vão controlar tudo relacionado ao conteudo da pagina na rota,
    normalmente dividos por temas da pagina (home, sobre, contato, etc), cada tema terá um controller.

   

    */


const express = require('express');
const app = express();

// Importando as rotas
const routes = require('./routes');

// Tratando o body da requisição para nao receber undefined em req.body
app.use(express.urlencoded({extended: true}));

// Mandando o Express executar as rotas
app.use(routes);



// Servidor Escuta
app.listen(3000, () => {
    console.log('Acessar http://localhost:3000') 
    console.log("Servidor executando na porta 3000")
        
});



























