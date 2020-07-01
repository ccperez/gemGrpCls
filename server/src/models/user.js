import db from '../dbconnection';

const User = {
	all: (callback) => {
		return db.query('SELECT * FROM users', callback);
	},
	find: (id, callback) => {
		return db.query('SELECT * FROM users WHERE id = ' + id, callback);
	},
	create: (user, callback) => {
		return db.query('INSERT INTO users SET ?', user, callback);
	},
	update: (id, user, callback) => {
		return db.query('UPDATE users SET ? WHERE id = ' + id, user, callback)
	},
	delete: (id, callback) => {
		return db.query('DELETE FROM users WHERE id = ' + id, callback);
	}
};

module.exports = User;