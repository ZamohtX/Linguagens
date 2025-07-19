//                                  WebPack


/*                    
                        Integrando o WebPack para o express

                Webpack é basicamente um sistema que converte o codigo para uma versao antiga do JS
               para conseguirmos rodar o codigo em navegadores antigos.

                A pagina vai ser carregada em um arquivo bundle que terá tudo relacionado ao sistema
*/





const express = require('express');
const app = express();

const path = require('path');

// Importando as rotas
const routes = require('./routes');

// Tratando o body da requisição para nao receber undefined em req.body
app.use(express.urlencoded({extended: true}));

// Executando a pasta de conteudo estatico -> Public
app.use(express.static(path.resolve(__dirname, 'public')))

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



























