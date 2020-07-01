import express from 'express';
import bodyParser from 'body-parser';

import config from './config';
import userRoutes from './src/routes/user';

// server
const server = express();

// middlewares
server.use(bodyParser.urlencoded({ extended: 'false' }));
server.use(bodyParser.json());

// routes
server.use('/api', userRoutes);

// port
server.listen(config.server,  () => 
	console.info(`Running on ${config.serverUrl}`)
);
