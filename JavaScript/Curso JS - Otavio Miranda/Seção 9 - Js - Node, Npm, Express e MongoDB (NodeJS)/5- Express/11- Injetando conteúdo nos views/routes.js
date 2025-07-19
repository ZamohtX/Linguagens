        // Esse arquivo vai guardar todas as rotas do servidor



// importando o express
const express = require('express');
    // Iniciando o objeto route
const route = express.Router();
    // Importando os controllers
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');

// function meuMiddleware(req, res, next) {
//     req.session = { nome: 'Thomaz', sobrenome: 'Xavier' };
//     console.log();
//     console.log('Passei no seu middleware.');
//     console.log();
//     next();
// }




// Rotas da Home
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);

// Rotas de Contato
route.get('/contato', contatoController.paginaInicial);



    // Exportando as rotas para serem usadas no server
        // route é o objeto que vai conter todas as rotas
module.exports = route;