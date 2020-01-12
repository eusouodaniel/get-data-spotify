const express = require('express');
const credentials = require('./services/credentials')
const getUser = require('./services/get-user')

const server = express();

server.get('/get-user/:user', async (req, res) => {
    var client = await credentials.getCredentials();

    if (client.statusCode != 400) {
        var user = await getUser.getInformationByUser(client, req.params.user);

        return res.json(user);
    }

    return res.json(client);
});

server.listen(3000);