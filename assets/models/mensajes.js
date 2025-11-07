const mongoose = require("mongoose");

/*
const UsuarioSchema  = new mongoose.Schema({
    cedula: String,
    userName: String,
    nombre: String,
    apellido: String,
    correro: String,
    password: String,
    telefono: String
},{collection:usuarios});

*/
const MensajeSchema = new mongoose.Schema({
    mensaje:String 
},{collection:"mensajes"});
mongoose.model("mensajes",MensajeSchema)