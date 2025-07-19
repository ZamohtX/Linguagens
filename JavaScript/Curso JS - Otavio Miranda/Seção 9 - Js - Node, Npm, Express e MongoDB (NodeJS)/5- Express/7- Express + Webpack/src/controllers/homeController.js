exports.paginaInicial = (req, res) => { 
        // Aqui nós mandamos renderizar na tela o nosso view referente a essa rota
    res.render('index');
}

exports.trataPost = (req, res) => {
    res.send('Ei, sou sua nova rota de POST');
}