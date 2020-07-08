import UserClass from '../models/userclass';
import { errorHandler } from '../helpers/dbErrorHandler';

const usersClass = {
	list: (req, res) => {
		const idClass = req.params.id_class;
		if (idClass) {
			UserClass.findbyClass(idClass, (error, userclass) => {
				res.json(error ? errorHandler(error) : userclass);
			});
		} else {
			UserClass.list((error, userclass) => {
				res.json(error ? errorHandler(error) : userclass);
			});
		}
	},
	addUser: (req, res) => {
		const userclass = req.body;
		UserClass.addUser(userclass, (error, userclass) => {
			res.json(error ? errorHandler(error) : userclass);
		});
	},
	deleteUser: (req, res) => {
		const { id_class, id_user } = req.params;
		UserClass.deleteUser(id_class, id_user, (error, userclass) => {
			if (error) {
				res.status(400).json({ error: errorHandler(error) });
			} else {
				res.json({ message: 'user deleted in the class successfully' });
			}
		});
	},
	deleteAllUser: (req, res) => {
		const idClass = req.params.id_class;
		UserClass.deleteAllUser(idClass, (error, userclass) => {
			if (error) {
				res.status(400).json({ error: errorHandler(error) });
			} else {
				res.json({ message: 'all users deleted in the class successfully' });
			}
		});
	}
};

module.exports = usersClass;

