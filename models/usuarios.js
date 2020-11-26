const db = require('./db');

const usuario = db.sequelize.define('dbo.Usuarios',{
    
    Id: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true, 
        primaryKey: true
    },

    Nome: {
        type: db.Sequelize.TEXT

    },

    Email: {
        type: db.Sequelize.TEXT
    },

    Passoword: {
        type: db.Sequelize.TEXT
    },

    Chave:{
        type: db.Sequelize.INTEGER
    }
    
},
{
    freezeTableName: true,
    schema: 'dbo',
    tableName: 'Usuarios',
    timestamps: false
});

// usuario.sync({force: true})


module.exports = usuario;