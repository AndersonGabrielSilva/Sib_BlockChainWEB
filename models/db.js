const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development' 
const config = require('./config.json')[env]

// conexão com o banco de dados
// const sequelize = new Sequelize('SIB_Blockchain', 'postgres', '1498', {
//     host: 'localhost',
//     dialect: 'postgres',
    
// });

const sequelize = new Sequelize(config.database, config.username, config.password, config);


//Testando conexão com o DataBase
sequelize.authenticate().then(function () {
    console.log("Conectado com sucesso ao Postgres")
}).catch(function (erro) {
    console.log("Falha na conexão com o Postgres" + erro);
});




//Exportando estas duas contantes para o Index
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}