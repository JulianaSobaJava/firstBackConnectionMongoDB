module.exports = (req, res, next)=>{
    console.log();
    if(req.body.cliente){
        req.body.cliente = req.body.cliente.replace("Juliana", "Não use esse Nome")
        console.log();
    console.log(`Vi que você postou ${req.body.cliente}`);
    console.log()

    }

    next();
}