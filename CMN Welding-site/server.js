const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));



app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

app.get('/quote', (req, res) => {
    res.sendFile(__dirname + '/public/quote.html');
});

app.get('/about_us', (req, res) => {
    res.sendFile(__dirname + '/public/about_us.html');
});

app.get('/gallery', (req, res) => {
    res.sendFile(__dirname + '/public/gallery.html');
});


app.get('/store', (req, res) => {
    res.sendFile(__dirname + '/public/store.html');
});


app.get('/hydraulic_repair', (req, res) => {
    res.sendFile(__dirname + '/public/Hydraulic_Repair.html');
});


app.get('/repair_mod', (req, res) => {
    res.sendFile(__dirname + '/public/Repair_Mod.html');
});


app.get('/mig_tig_stick', (req, res) => {
    res.sendFile(__dirname + '/public/Mig_Tig_stick.html');
});


app.get('/custom_fab', (req, res) => {
    res.sendFile(__dirname + '/public/Custom_Fab.html');
});

app.get('/store', (req, res) => {
    res.sendFile(__dirname + '/public/Store.html');
});

