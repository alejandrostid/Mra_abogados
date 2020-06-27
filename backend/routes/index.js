const express = require('express')
const nodemailer = require('nodemailer')
const router = express.Router();

const Comentario = require('../models/models')


router.get('/Inicio',(req, res)=> {
        res.render('index')
})

router.get('/laboral',(req,res)=>{
    res.render('laboral')
})
router.get('/civil',(req, res)=>{
    res.render('civil')
})
router.get('/Administrativo',async (req, res)=>{
    const comentario = await Comentario.find();
    res.render('administrativo',{
        comentario: comentario
    })
})
router.post('/addadministrativo', async (req, res)=>{
    const comentario = new Comentario(req.body)
    await comentario.save()
    console.log(comentario)
    res.redirect('administrativo')
})

router.get('/Covid19',(req, res)=>{
    res.render('covid19')
})

router.get('/contactenos',(req, res)=>{
    res.render('contacto')
})


router.post('/contactenos',async(req, res)=>{
    const{correo, text} = req.body;
    contentHTML= `
    <div> 
        <h1>informacion sobre el usuario</h1>
        <ul>
            <li>correo: ${correo}</li>
            <li>mensage: ${text}</li>
        </ul>
     </div>
    `;
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
            user: 'kaylee.keeling29@ethereal.email',
            pass: '4PfhtHgw3Cmu2WC8yM'
    },
        tls:{
            rejectUnauthorized:false
        }
    });

    const info = await transporter.sendMail({
        from:"MRA abogados",
        to:"herrerastid@gmail.com",
        subject: "usuario interesado",
        html: contentHTML
    })

    res.send("enviado")
    console.log(contentHTML)
    

})
module.exports = Comentario
module.exports = router;