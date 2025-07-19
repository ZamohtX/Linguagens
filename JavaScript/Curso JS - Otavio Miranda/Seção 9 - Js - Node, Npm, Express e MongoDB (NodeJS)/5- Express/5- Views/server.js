//                                  Views


/*                    Renderizar o html utilizando express

            Os views são ejs que serao renderizados na tela quando chamarmos um caminho especifico.
            ejs é basicamente um tipo de html melhorado, que se pode usar js la dentro.
            
            esses ejs ficaram armazenados na pasta views, que serao carregados pelos controllers das routes.
*/





const express = require('express');
const app = express();

const path = require('path');

// Importando as rotas
const routes = require('./routes');

// Tratando o body da requisição para nao receber undefined em req.body
app.use(express.urlencoded({extended: true}));

// Fala pro express qual a pasta e engine para renderizar os views, vamos utilizar ejs
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// Mandando o Express executar as rotas
app.use(routes);



// Servidor Escuta
app.listen(3000, () => {
    console.log('Acessar http://localhost:3000') 
    console.log("Servidor executando na porta 3000") 
});



























