const { NODE_ENV, HOST, PORT, DB_HOST } = process.env

export const nodeEnv = NODE_ENV || 'development';

export default {
	server: {
		port: PORT || 3000,
		host: HOST || '0.0.0.0'
	},
    database: {
          host: DB_HOST || 'localhost',
          user: 'root',
      password: 'rootPassword',
      database: 'nodeDB'
	},
	get serverUrl() {
		return `http://${this.server.host}:${this.server.port}`;
	}
};
