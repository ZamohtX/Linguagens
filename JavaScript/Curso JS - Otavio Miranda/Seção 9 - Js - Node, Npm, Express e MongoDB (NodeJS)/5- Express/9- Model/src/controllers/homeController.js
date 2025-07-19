
exports.paginaInicial = (req, res) => { 
        // Aqui nós mandamos renderizar na tela o nosso view referente a essa rota
    res.render('index');
    return;
}

exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
}