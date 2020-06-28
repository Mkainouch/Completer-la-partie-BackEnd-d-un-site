const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const fs = require('fs');

var data = JSON.parse(fs.readFileSync("data/reservations.json"));
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, "public")))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public/html/home.html'))
})
app.get('/home', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public/html/home.html'))
})
app.get('/galerie', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public/html/galerie.html'))
})
app.get('/inscription', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public/html/inscription.html'))
})
app.get('/reservations', (req, res) => {
    // res.sendFile(path.resolve(__dirname, 'pages/page1.ejs'))
    res.redirect('reservation');
});


app.set('view engine','ejs');
var reservations=[];
app.get('/reservation',(req,res)=>{
    var wd=fs.readFileSync('./data/reservations.json');
reservations=JSON.parse(wd);
res.render('reservations',{entreprise:reservations});
});
// Ajouter Département  //
app.post('/d',(req,res)=>{
    reservations.push({
        "id":reservations.length +1,
        "Prenom": req.body.Prenom,
        "Nom": req.body.Nom,
        "naissance": req.body.naissance,
        "Age": req.body.Age,
        "Depart": req.body.Depart,
        "Retour": req.body.Retour,
        "dateCharge": req.body.dateCharge,
        "heureCharge": req.body.heureCharge,
        "dateRetour": req.body.dateRetour,
        "heureRetour": req.body.heureRetour,
        "jours": req.body.jours
    });
fs.writeFile('./data/reservations.json',JSON.stringify(reservations,null,5),(err)=>{
    console.log(err);
});
res.sendFile(path.resolve(__dirname, 'public/html/galerie.html'))
});

// delete
app.post("/delete", function (req, res) {
    reservations = reservations.filter(d => d.id != req.body.id);
    let data = JSON.stringify(reservations, null, 2);
    fs.writeFileSync('reservation.json', data, 'utf-8');
    res.redirect('/reservation');
});



app.listen(2020, function () {
    console.log('runing....')
})