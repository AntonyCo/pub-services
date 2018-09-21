const express = require('express');
const pubService = require('pub-services').services.pubService;
const app = express();

app.get('/pubs', function (req, res) {
    const pubs = pubService.findAll();
    res.status(200).json(pubs);
});
app.get('/pubs/opened', function (req, res) {
    const pubs = pubService.findAllOpened();
    res.setHeader('Content-Type', 'application/json');
    res.status(200).sendFile('index.html');
});
var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});
