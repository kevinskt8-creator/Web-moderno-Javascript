const bodyParse = require("body-parse");
const bodyParser = require("body-parser");
const express = require("express");

app.use(express.static("."));
app.use(bodyParser.unlercoded({ extend: true }));
app.use(bodyParser.json());

const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, '.')
    },
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`) {

        }
    } 
})

const upload = multer({ storage }.single('arquivo'))

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if (err) {
            return res.end('Ocorreu um erro.')
        }
        res.end('Concluído com sucesso.')
    })
})

app.listen(8081, () => console.log("Executnado..."));
