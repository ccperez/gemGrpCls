require('dotenv').config();

const { NODE_ENV, PORT, HOST } = process.env;
const { DB_HOST, DB_USER, DB_PSWD, DB_NAME } = process.env;
const { JWT_SECRET } = process.env;

export const nodeEnv = NODE_ENV || 'development';

export default {
	server: {
		port : PORT,
		host : HOST
	},
	database: {
		host 		 : DB_HOST,
		user		 : DB_USER,
		password : DB_PSWD,
		database : DB_NAME
	},
	get serverUrl() {
		return `http://${this.server.host}:${this.server.port}`;
	},
	secret: JWT_SECRET
};
