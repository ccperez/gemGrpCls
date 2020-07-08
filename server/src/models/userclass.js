import db from '../../dbconnection';

const UserClass = {
	list: (callback) => {
		return db.query('SELECT * FROM vwUsersClass', callback);
	},
	findbyClass: (idClass, callback) => {
		return db.query('SELECT * FROM vwUsersClass WHERE id_class='+ idClass, callback);
	},
	addUser: (classuser, callback) => {
		return db.query('INSERT INTO userclass SET ?', classuser, callback);
	},
	deleteUser: (idClass, idUser, callback) => {
		return db.query('DELETE FROM userclass WHERE id_class='+ idClass +' and id_user='+ idUser, callback);
	},
	deleteAllUser: (idClass, callback) => {
		return db.query('DELETE FROM userclass WHERE id_class='+ idClass, callback);
	}
};

module.exports = UserClass;