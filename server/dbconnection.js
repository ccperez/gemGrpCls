import mysql from 'mysql';
import config from './config';

const connection = mysql.createConnection(config.database);

// open the MySQL connection
connection.connect(error => {
	if (error) throw error;
	console.log("Successfully connected to the database.");
});

module.exports = connection;
