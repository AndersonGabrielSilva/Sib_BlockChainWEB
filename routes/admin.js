const express = require('express');
const router =  express.Router();

//Rotas


router.get('/inicio', (req, resp) => {

    resp.render('src/Cadastro')
    
})

router.get('/imoveis',(req,res) =>{

    res.render('src/Imoveis');

})

router.get('/bitcoins', (req,res) =>{
    res.render('src/Bitcoins');
})

router.get('/cadastro', (req,res) =>{
    res.render('src/Cadastro');
})

router.get('/login', (req,res) =>{
    res.render('src/Login');
})

router.get('/informacoes', (req,res) =>{
    res.render('src/Informacoes');
})

router.get('/lancamentos', (req,res) =>{
    res.render('src/Lancamentos');
})

router.get('/transacoes', (req,res) =>{
    res.render('src/Transacoes');
})




module.exports = router;