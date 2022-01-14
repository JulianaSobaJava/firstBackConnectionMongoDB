const HomeModel = require ('../models/HomeModel');

HomeModel.create({
     titulo: 'Uma Rebeca do Outro Mundo',
     descrição: 'Meus Irmãos'
})
.then(dados=>console.log(dados))
.catch(e=>console.log(e));

exports.homePage =(req, res)=>{
    res.render('index');
    return;
}

module.exports.trataPost = (req, res, next)=>{
    res.send(req.body)
    return;
}