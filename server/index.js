import express from 'express';
import config from './config';
import userRoutes from './src/routes/user';

// server
const server = express();

// routes
server.use('/api', userRoutes);

// port
server.listen(config.server,  () => 
	console.info(`Running on ${config.serverUrl}`)
);
