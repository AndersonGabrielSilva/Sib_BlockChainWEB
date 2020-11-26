const express = require('express');
const app = new express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');//Serve para receber dados de qualquer formulario7
const path = require('path');
const adminroute = require('./routes/admin');
const controllerroute = require('./routes/controllers');
const usuario = require('./models/usuarios');

//Config    
    //Template engine - Para renderizar a pagina html
    // app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
    app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
    app.set('view engine', 'handlebars');

    // Body Parser - Permite que será recebido os dados do Formulario HTML
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    //Caminhos estaticos
    app.use(express.static(path.join(__dirname,"views")))


//Rotas
    app.get('/', (req, resp) => {
        resp.render('index')
    })

    app.use(adminroute);
    app.use(controllerroute);
    
    // app.post('/criarconta',(req,resp)=> {

    //     usuario.create({
            
    //         Nome: req.body.nome,
    //         Email: req.body.email,
    //         Passoword: req.body.senha

    //     }).then(function(){
    //         resp.redirect('/login')

    //     }).catch(function(){
    //         resp.send("Ouve um erro !  "+ erro)
    //     })    
    
    //     // resp.send('Texto: '+req.body.nome)
        
    // });

app.listen(7000, function () {
    console.log("Server rodando!")
});