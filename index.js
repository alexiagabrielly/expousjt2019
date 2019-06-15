//Importa as lib
const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser")
const alunos = require("./models/Alunos")


app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Rotas
app.get('/Alunos', function(req, res){
    res.render('alunos');
});

app.get('/cad-alunos', function(req, res){
    res.render('cad-alunos');
});

app.post('/add-alunos', function(req, res){
    alunos.create({
        nome: req.body.nome,
        valor: req.body.valor
    }).then(function(){
        res.redirect('/alunos')
        //res.send("Formulário cadastro com sucesso!")
    }).catch(function(erro){
        res.send("Erro: Formulário não foi cadastrado com sucesso!" + erro)
    })
    //res.send("Nome: " + req.body.nome + "<br>Valor: " + req.body.valor + "<br>") 
})

app.listen(8080);