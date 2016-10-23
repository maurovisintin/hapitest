'use strict';

import Hapi from 'hapi'
import Routes from './routes'

const server = new Hapi.Server();
server.connection({ port: 3000 });

server.route(Routes.endpoints);

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});
