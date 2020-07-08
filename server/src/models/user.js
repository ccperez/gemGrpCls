import db from '../../dbconnection';

const User = {
	list: (callback) => {
		return db.query("SELECT * FROM users ORDER BY age DESC", callback);
	},
	findbyID: (id, callback) => {
		return db.query("SELECT * FROM users WHERE id = " + id, callback);
	},
	findbyEmail: (email, callback) => {
		return db.query("SELECT * FROM userCredentials WHERE email='"+ email +"'", callback);
	},
	findbyRole: (id, callback) => {
		return db.query("SELECT * FROM userCredentials WHERE id = " + id, callback);
	},	
	findbyGroup: (idGroup, callback) => {
		return db.query("SELECT * FROM vwUsersGroup WHERE id_group = " + idGroup, callback);
	},
	create: (user, callback) => {
		return db.query("INSERT INTO users SET ?", user, callback);
	},
	update: (id, user, callback) => {
		return db.query("UPDATE users SET ? WHERE id = " + id, user, callback)
	},
	delete: (id, callback) => {
		return db.query("DELETE FROM users WHERE id = " + id, callback);
	},
	groupCount: (callback) => {
		return db.query("SELECT * FROM vwUsersGroupCount", callback);
	},
	genderCount: (callback) => {
		return db.query("SELECT * FROM vwUsersGenderCount", callback);
	},
	groupGenderCount: (callback) => {
		return db.query("SELECT * FROM vwUsersGroupGenderCount", callback);
	}
};

module.exports = User;