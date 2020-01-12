const express = require('express');
const credentials = require('./services/credentials')

const server = express();


server.get('/get-user/:user', async (req, res) => {
    var client = await credentials.getCredentials();

    if (client.statusCode != 400) {
        var user = await client.getUser(req.params.user).then(function(data) {
            return data.body;
        }, function(err) {
            return res.json(err);
        });

        return res.json(user);
    }

    return res.json(client);
});

server.listen(3000);