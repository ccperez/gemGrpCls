import config from './config';
import mysql from 'mysql';

const connection = mysql.createPool(config.database);

module.exports = connection;
