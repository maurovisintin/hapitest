exports.welcomeMessage = {
    auth: false,
    handler: function (request, reply) {
         reply('Welcome to hapi test!');
    }
}

exports.message = {
    auth: false,
    handler: function (request, reply) {
         reply(`Welcome to hapi test route ${encodeURIComponent(request.params.name)}`);
    }
}
