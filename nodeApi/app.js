const serverless = require('serverless-http');
const cors = require('cors');

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const PORT = process.env.PORT || 5000;
const URI = "mongodb+srv://eddd98:eddd1998@cluster0.hotyr.mongodb.net/ListaDB?retryWrites=true&w=majority"

const Lista = require('./models/Articulo');
const Articulo = require('./models/Articulo');
const { collection, db } = require('./models/Articulo');
const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());

app.listen(PORT, ()=>console.log("Listening in port: " + PORT));

app.get("/", async(request, result)=>{
    result.send("Hola")
})

app.get("/lista", async(request, result)=>{
    try {
        const articulo = await Articulo.find();
        result.json(articulo)
        console.log("Datos leidos")
    } catch (error) {
        result.send({message:"Error cargando los datos"})
    }
})

app.post("/lista", async(request, result) => {
    var articulo = new Articulo ({
        name: request.body.name,
        isChecked: request.body.isChecked 
     })
     await articulo.save()
     result.send(JSON.stringify(articulo));
     console.log("Dato Agregado")
})

app.put("/lista/:id", async(request, result) => {
    await Articulo.findByIdAndUpdate(request.params.id, { isChecked: true });
    result.send({message:"Dato Eliminado"})
    console.log("Dato actualizado")
})

app.delete("/lista/:id", async(request, result) => {
    await Articulo.findByIdAndRemove(request.params.id);
    result.send({message:"Dato Eliminado"})
    console.log("Dato Eliminado")
})

const connectDB = async()=>{
    await mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true} );
    console.log("DB conectada")
}

connectDB();

module.exports.handler = serverless(app);