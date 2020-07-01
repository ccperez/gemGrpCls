const { NODE_ENV, HOST, PORT } = process.env

export const nodeEnv = NODE_ENV || 'development';

export const logStars = (message) => {
	console.info(message);
};

export default {
	server: {
		port: PORT || 3000,
		host: HOST || '0.0.0.0'
	},
	get serverUrl() {
		return `http://${this.server.host}:${this.server.port}`;
	}
};
