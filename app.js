//Carregando módulos
require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const admin = require('./routes/admin')
const mongoose = require('mongoose')

//Configurações
    //bodyparser
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())

    //Static Files
    app.use(express.static('public'))
    app.use('/public', express.static(__dirname+'/public'))

    //Set Views
    app.set('views', './views')
    app.set('view engine','ejs')
   
    
//Rotas
app.get('/', (req, res) =>{
    res.render('principal')
})

app.get('/login', (req, res) =>{
    res.render('login')
})

app.get('/cadastro', (req, res) =>{
    res.render('cadastro')
})

app.post('/cadastro', (req, res) => {
    var firstname = req.body.firstName;
    var lastname =req.body.lastName;
    var email = req.body.email;
    var username =req.body.username;
    var senha = req.body.senha;
  
    var data = {
        "primeiroNome": firstname,
        "ultimoNome": lastname,
        "nomeUsuario":username,
        "email": email,
        "senha": senha
    }

    db.collection('usuarios').insertOne(data,function(err, collection){
        if (err) throw err;
        console.log("Cadastrado com sucesso");             
    });
          
    return res.redirect('/cadastro');
})
app.get('/carrinho',(req, res) => {
    res.render('pagamento')
})

app.get('/cursos', (req, res) =>{
    res.render('cursos')
})
//app.use('/start', admin)

//Mongoose
const dbuser = process.env.DB_USER
const dbpassword = process.env.DB_PASS
mongoose.connect(`mongodb+srv://${dbuser}:${dbpassword}@cluster0.0hvch.mongodb.net/?retryWrites=true&w=majority`)
var db=mongoose.connection;
db.on('error', console.log.bind(console, "Falha no banco de dados"));
db.once('open', function(callback){
    console.log("Banco conectado");
    app.listen(3012)
})


