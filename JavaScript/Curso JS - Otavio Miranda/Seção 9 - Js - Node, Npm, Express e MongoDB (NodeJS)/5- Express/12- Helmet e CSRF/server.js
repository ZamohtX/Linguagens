


// Protegendo os dados
  // Cria arquivo .gitignore e coloca node_modules e .env para serem ignorados quando forem enviados ao git
require("dotenv").config();

const express = require('express');
const app = express();

// Conectando BD 
  // Importa moongose para conectarmos
const mongoose = require('mongoose');
  
  // Conectando a BD
mongoose.connect(process.env.CONNECTIONSTRING, {useNewUrlParser: true, useUnifiedTopology: true}) // CONNECTIONSTRING esta guardada em .env
    // Usando a promise retornada para emitir um sinal para inicializarmos o servidor    
  .then(() => {
      // Emitindo sinal para iniciar o servidor
    app.emit('BDConectada');
  })
  .catch(e => console.log(e));


// Importando os pacotes necessarios para as sessões
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');



// Importando as rotas
const routes = require('./routes');
// Importando path para tratar o caminho dos arquivos
const path = require('path');
// Importando Hemet e CSRF para segurança
const helmet = require('helmet');
const csrf = require('csurf');
// Importando os middlewares 
const { middlewareGlobal, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware.js');





// Usando Helmet para segurança
app.use(helmet());
// Tratando o body da requisição para nao receber undefined em req.body
app.use(express.urlencoded({extended: true}));

// Executando a pasta de conteudo estatico -> Public
app.use(express.static(path.resolve(__dirname, 'public')))


// Configurando a Sessão do usuario
const sessionOptions = session({
  secret: 'textosecretoqualquer blablabla',
  store:  MongoStore.create( {mongoUrl: process.env.CONNECTIONSTRING } ),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true
  }
});
app.use(sessionOptions);
app.use(flash());

// Fala pro express qual a pasta e engine para renderizar os views, vamos utilizar ejs
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// Usando csrf para verificacao de segurança dos formularios
app.use(csrf());
// Fazendo todas as requisições passarem pelo middleware
app.use(middlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);
// Mandando o Express executar as rotas
app.use(routes);



// Servidor Escuta
  // Captura o evento emitido quando a base for conectada e inicia a execução do servidor
app.on('BDConectada', () => {
  app.listen(3000, () => {
      console.log('Acessar http://localhost:3000') 
      console.log("Servidor executando na porta 3000") 
})
});



























