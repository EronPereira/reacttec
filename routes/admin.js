const express = require('express')
const router = express.Router()
const app = express()
const path = require('path')
app.use(express.static(path.join(__dirname + "/public")))

router.get('/',(req, res)=>{
res.send('Pagina principal')
})

router.get('/cursos',(req, res)=>{
res.send("Pagina cursos")
})

router.get('/login',(req, res)=>{
    app.get('/', function(req, res){
        res.render('login/index.html')
    });
})

router.get('/regitrar',(req, res)=>{
    res.send("Pagina registro")
})

router.get('/pagamento',(req, res)=>{
    res.send("Pagina pagamento")
})


module.exports = router
