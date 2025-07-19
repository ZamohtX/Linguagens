
exports.paginaInicial = (req, res) => { 
    // req.session.usuario = { nome: 'Thomaz', logado: true };
    // req.flash('info', 'Hello World 1');
    // req.flash('error', 'Hello World 2');
    // req.flash('sucess', 'Hello World 3');
    // console.log(req.flash('info'), req.flash('error'), req.flash('sucess'))
    res.render('index');
    return;
};

exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
};


