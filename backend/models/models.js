const mongoose = require('mongoose');

 const Schema = mongoose.Schema;

const Comentarios = new Schema({
     nombre : String,
     comentario : String
 })

 module.exports = mongoose.model('comentario',Comentarios)