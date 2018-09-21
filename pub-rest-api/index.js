const express = require('express');
const pubService = require('pub-services').services.pubService;
const app = express();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/pubs', function (req, res) {
    const pubs = pubService.findAll();
    res.status(200).json(pubs);
});
app.get('/pubs/opened', function (req, res) {
    const pubs = pubService.findAllOpened();
    res.status(200).json(pubs);
});
var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});
