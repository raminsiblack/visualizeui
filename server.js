

'use strict';

const Hapi = require('hapi');
const fetch = require('node-fetch');

const authBaseUri = 'https://accounts.spotify.com/api';

// Create a server with a host and port
const server = Hapi.server({
    host:'localhost',
    port:8000,
    routes: {
        cors: true
    }
});

// Add the route
server.route({
    method:'GET',
    path:'/auth',
    handler: async function(request,h) {
        const res = await fetch(`${authBaseUri}/token`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: `Basic ZjcxODVjNjhlMzliNDM3ZTljNzIwNzE3ZTIxNzhmMTk6YWNkZTA1ZTYxODkwNDFmMjg3MTRmYzc1NmVmZDJmY2U=`
            },
            body: 'grant_type=client_credentials'
        });
        const json = await res.json();
        return json;    
    }
});

// Start the server
async function start() {

    try {
        await server.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }

    console.log('Server running at:', server.info.uri);
};

start();

