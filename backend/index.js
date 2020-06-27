const express = require('express')
const app =express();
const path = require('path')
const mongoose= require('mongoose')
/* database*/
const URL = ('mongodb://localhost/office')
mongoose.connect(URL,{
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
.then(db => console.log('la base esta conectada'))
.catch(err => console.log(err))

/* entrar al servidor*/ 

app.set('port',process.env.PORT ||3000);

app.listen(app.get('port'),()=>{
    console.log('el servidor se esta ejecutando en el localhost ' + app.get('port'))
})

/*hacer entendible los datos del mismo*/

app.use(express.urlencoded({ extended:false }))
app.use(express.json())

/* rutas */

app.use(require('./routes/index'))
app.get('/Inicio',function(req,res){
    res.render('index')
})

/* documentos estaticos */

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'public'))
app.use(express.static(path.join(__dirname,'public')))

