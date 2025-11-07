const express = require("express"); // Inicializar el sevidor y conectar con una puerta del servidor
const cors = require("cors"); // conectar paginas con diferentes origenes 
const mongoose = require("mongoose");  // modelos o estrucutra de datos que se descargan de la base de datos
const axios = require("axios"); // conexiones con el front  POST GET 

const app = express(); 

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true})); 

const PORT = 5000;

app.listen(PORT, function () {
    console.log("CONECTADO AL PUERTO:"+ PORT);
}); 

const bbdd = "app-futuro";
const url = "mongodb+srv://Santiago10:Santikacha07@cluster0.eppfml0.mongodb.net/"+bbdd+"?retryWrites=true&w=majority&appName=Cluster0";



















































const connection = mongoose.connect(url);

connection.then(function () {
    console.log("CONECTADO A LA BASE DE DATOS");
}).catch(function (error) {
    console.log("Error en la conexión"+ error);

});

require("./assets/models/mensajes.js")

const Mensajes = mongoose.model("mensajes");

app.post("/subir", function(req, res){

    const mensaje = req.body.mensaje;
    console.log(mensaje);

    try {


        Mensajes.create({mensaje});

        res.send({
            status: true,
            message: "Mensaje enviado"
        })
    }
    

    catch (error){
        res.send({
            status: false,
            message: "No se logro enviar el mensaje",
            error:error.message
        })

    }

});

app.get("/recibir", async function (req,res){

    try {

        const mensajes =await Mensajes.find({});

        res.send({
            status:true,
            message: "Mensajes recibidos correctamente",
            datos:mensajes

        });

    }

    catch(error) {


         res.send({

            status: false,
            message: "Error al enviar el mensaje",
            error:error.message


         })
    }


});
