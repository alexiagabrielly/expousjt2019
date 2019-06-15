const db = require('./db')

const Alunos = db.sequelize.define('alunos', {
    //Campos (Verificar com o Banco)
    
    //Campo Nome
    nome: {
        type: db.Sequelize.STRING
    },
    //Campo Valor
    valor: {
        type: db.Sequelize.DOUBLE
    }
})


module.exports = Alunos