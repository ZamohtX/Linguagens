exports.middlewareGlobal = (req, res, next) => {
        // Injetando dados em todas as rotas
    res.locals.umaVariavelLocal = 'Este é o valor da variavel local'
    next();
}

exports.outroMiddleware = (req, res, next) => {
    next();
}

exports.checkCsrfError = (err, req, res, next ) => {
 if (err && err.code === 'EBADCSRFTOKEN') {
    return res.render('404');
 }
}

exports.csrfMiddleware = (req,res,next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
};