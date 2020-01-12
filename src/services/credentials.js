
const spotifyApi = require('spotify-web-api-node');
require('dotenv/config');

const getCredentials = async _ => {
    var clientSpotify = await instanceClient();

    var credentials = await clientSpotify.clientCredentialsGrant().then(function(data) {
        clientSpotify.setAccessToken(data.body['access_token']);
        
        return clientSpotify;
    }, function(err) {
        return err;
    });

    return credentials;
}

const instanceClient = async _ => {
    return await new spotifyApi({
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET
    });
}

module.exports = { getCredentials };
