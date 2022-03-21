const Hapi = require('@hapi/hapi');
const routes = require('./routes');
const process = require('process')

const init = async () => {
    const port = process.env.PORT || 3001;

    const server = Hapi.server({
        port: port,
        host: 'localhost',
        routes: {
            cors: {
                origin: ['*'],
            },
        },
    });

    server.route(routes);

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
})

init();