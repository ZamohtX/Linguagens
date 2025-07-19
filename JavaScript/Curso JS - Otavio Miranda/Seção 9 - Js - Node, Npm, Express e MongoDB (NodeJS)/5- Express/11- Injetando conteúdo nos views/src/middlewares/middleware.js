exports.middlewareGlobal = (req, res, next) => {
        // Injetando dados em todas as rotas
    res.locals.umaVariavelLocal = 'Este é o valor da variavel local'
    next();
}

exports.outroMiddleware = (req, res, next) => {
    next();
}