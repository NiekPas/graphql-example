const express = require('express');
const app = express();
const wordpressControls = require('./wordpress-controls');

app.get('/wordpress-controls', (req, res) => {
    res.json(wordpressControls);
});

app.get('/wordpress-control/:id', (req, res) => {;
    res.json(wordpressControls.find(wpc => wpc.id === parseInt(req.params.id, 10)));
});

app.listen(1234, () => {
    console.log('🤖  Beep boop, REST API server listening on port 1234');
});
