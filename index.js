const express = require("express");
const app = express();
const PORT = 6969;

app.set('view engine', 'ejs');
app.get("/", (req, res) => {
    var ip = req.headers['x-forwarded-for']
    if (!ip) {
        ip = "Vaší ip adresu nebylo možné získat :("
    }
    console.log(ip);
    res.render('index.ejs', { ip: ip });
});

app.listen(PORT, () => {
    console.log("Aplikace běží na portu: " + PORT);
});