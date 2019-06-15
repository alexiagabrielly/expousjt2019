const Sequelize = require("sequelize")

//Conexao com Banco
//Dados de Acesso
const sequelize = new Sequelize('u640196580_usjt', 'u640196580_saoju', 'saojudas123',{
    host: 'sql143.main-hosting.eu',
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}