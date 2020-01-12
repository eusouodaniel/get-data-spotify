const getInformationByUser = async (client, user) => {
    var user = await client.getUser(user).then(function(data) {
        return data.body;
    }, function(err) {
        return err;
    });

    return user;
}

module.exports = { getInformationByUser };
