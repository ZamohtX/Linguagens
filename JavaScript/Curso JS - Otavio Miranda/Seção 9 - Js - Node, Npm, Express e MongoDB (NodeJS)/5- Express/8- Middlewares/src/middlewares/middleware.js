module.exports = (req, res, next) => {
    if (req.body.cliente) {
        req.body.cliente = req.body.cliente.replace('Junior', 'Troquei Junior por Xavier')
        console.log();
        console.log(`Vi que voce postou ${req.body.cliente}`)
        console.log();
    }

    next();
}