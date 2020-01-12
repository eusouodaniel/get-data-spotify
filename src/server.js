const express = require('express');
const credentials = require('./services/credentials')

const server = express();


server.get('/get-user/:user', async (req, res) => {
    var client = await credentials.getCredentials();

    var user = await client.getUser(req.params.user).then(function(data) {
        return data.body;
    }, function(err) {
        return res.json(err);
    });

    return res.json(user);
});

server.listen(3000);