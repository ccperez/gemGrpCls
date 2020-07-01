  const env = process.env;

  export const nodeEnv = env.NODE_ENV || 'development';

  export const logStars = (message) => {
    console.info(message);
  };

  export default {
    server: {
      port: env.PORT || 3000,
      host: env.HOST || '0.0.0.0'
    },
    database: {
          host: env.DB_HOST || 'localhost',
          user: 'root',
      password: 'rootPassword',
      database: 'nodeDB'
    },
    get serverUrl() {
      return `http://${this.server.host}:${this.server.port}`;
    }
};
