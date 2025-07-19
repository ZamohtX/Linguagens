//                                  Middlewares


/*                    
          Middle são funcões que vao executar algo antes ou depois de responder o cliente
          Eles podem ser usados da forma que quiser, passar dados, tratamento de dados, resposta ao cliente
          Tudo que vier dps da chave da rota, é um middleware que vai fazer algo 

          route.get('/', meu middleWare, homeController.paginaInicial, ultimo middleware);

          todos os middlewares recebem 3 parametros: req, res e next
            req e res vao fazer todo o tratamento que a função foi projetada
            next vai fazer passar para o proximo middleware, assim eles vao seguir uma ordem de execução

*/





const express = require('express');
const app = express();

// Importando as rotas
const routes = require('./routes');
// Importando path para tratar o caminho dos arquivos
const path = require('path');
// Importando os middlewares 
const meuMiddleware = require('./src/middlewares/middleware.js');


// Tratando o body da requisição para nao receber undefined em req.body
app.use(express.urlencoded({extended: true}));

// Executando a pasta de conteudo estatico -> Public
app.use(express.static(path.resolve(__dirname, 'public')))

// Fala pro express qual a pasta e engine para renderizar os views, vamos utilizar ejs
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// Fazendo todas as requisições passarem pelo middleware
app.use(meuMiddleware);

// Mandando o Express executar as rotas
app.use(routes);



// Servidor Escuta
app.listen(3000, () => {
    console.log('Acessar http://localhost:3000') 
    console.log("Servidor executando na porta 3000") 
});



























