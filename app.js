const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');
const ejs = require('ejs');
const app = express();
const port = process.env.PORT || 3000;


app.set('view engine', 'ejs')
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


const shortLinks = [];


app.get('/', (req, res) => {
    res.render("index", { shortLinks: shortLinks });
})

app.post('/', (req, res) => {

    const query = req.body.url

    const url = "https://api.shrtco.de/v2/shorten?url=" + query

    https.get(url, (response) => {
        console.log(response.statusCode);

        response.on("data", (data) => {
            const resultReceived = JSON.parse(data)
            const originalURL = resultReceived.result.original_link;
            const shortenURL = resultReceived.result.full_short_link2;


            shortLinks.push({
                original: originalURL,
                short: shortenURL
            });

        })
        res.redirect("/")

    });


})














app.listen(port, () => {
    console.log(`Server started on port ${port}!...`);
})