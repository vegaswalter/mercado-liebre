const express = require("express");
const path = require("path")
const app = express();


// Servidor
app.listen(3000, () => {
    console.log("El servidor esta funcionando")
});

// Rutas

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views/home.html"))
});

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "views/login.html"))
});

app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "views/register.html"))
});

app.post("/datos", (req, res) => {
    res.send(req.body)
});


// Archivos static
app.use(express.static(path.join(__dirname, '../public')));

app.use(express.urlencoded({extended:false}))