const usuario = require('../models/usuarios');
const express = require('express');
const routerPost =  express.Router();

routerPost.post('/criarconta',(req,resp)=> {

    usuario.create({
            
        Nome: req.body.nome,
        Email: req.body.email,
        Passoword: req.body.senha

    }).then(function(){
        resp.redirect('/login')
        
    }).catch(function(){
        resp.send("Ouve um erro !  "+ erro)
    })    
    
})

module.exports = routerPost;

