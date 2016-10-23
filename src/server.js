'use strict';

import Hapi from 'hapi'
import Routes from './routes'
import Db from '../config/db'

const server = new Hapi.Server();
server.connection({ port: 3000 });

server.route(Routes.endpoints);

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});
