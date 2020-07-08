import express from 'express';
import bodyParser from 'body-parser';

import config from './config';

import authRoutes from './src/routes/auth';
import userRoutes from './src/routes/user';
import userclassRoutes from './src/routes/userclass';

// server
const server = express();

// middlewares
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

server.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept, Authorization"
	);
	if (req.method === "OPTIONS") {
		res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
		return res.status(200).json({});
	}
	next();
});

// routes
server.use('/api', authRoutes);
server.use('/api', userRoutes);
server.use('/api', userclassRoutes);

server.use((req, res, next) => {
	const error = new Error("404 Not found");
	error.status = 404;
	next(error);
});

server.use((error, req, res, next) => {
	res.status(error.status || 500);
	res.json({
		error: { message: error.message }
	});
});

// port
server.listen(config.server,  () => 
	console.info(`Running on ${config.serverUrl}`)
);
