const express = require("express");
const app = express();
const PORT = 6969;
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    var ip = req.headers['x-forwarded-for']
    if (!ip) {
        ip = "Vaší ip adresu nebylo možné získat :("
    }
    res.render('index.ejs', { ip: ip });
});


app.listen(PORT, () => {
    console.log("Aplikace běží na portu: " + PORT);
});