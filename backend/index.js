// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoute = require('../backend/routes/userroute');
const carRoute = require('../backend/routes/carroute') ; 
const app = express();
app.use(express.json());
app.use(cors());

app.listen(5000, () => {
    console.log("Le serveur tourne sur le port 5000");
});

app.use("/api/users", userRoute);
app.use("/api/cars", carRoute); 
mongoose.connect("mongodb+srv://sedkibagga4:3asfour25102212@cluster0.thnsoxz.mongodb.net/location?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log("Connecté à MongoDB");
    })
    .catch((error) => {
        console.log("Échec de la connexion à MongoDB:", error.message);
    });