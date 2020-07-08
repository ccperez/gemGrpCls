import User from '../models/user';

const users = {
	list: (req, res) => {
		const id = req.params.id;
		if (id) {
			User.findbyID(id, (error, user) => {
				res.json(error ? error : user[0]);
			});
		} else {
			User.list((error, users) => {
				res.json(error ? error : users);
			});
		}
	},
	group: (req, res) => {
		const group = req.params.group;
		User.findbyGroup(group, (error, users) => {
			res.json(error ? error : users);
		});	
	},	
	create: (req, res) => {
		const user = req.body;
		User.create(user, (error, user) => {
			res.json(error ? error : user);
		});
	},
	update: (req, res,) => {
		const id = req.params.id;
		const user = req.body; 
		User.update(id, user, (error, user) => {
			res.json(error ? error : user[0]);
		});
	},
	delete: (req, res) => {
		const id = req.params.id;
		User.delete(id, (error, user) => {
			res.json(error ? error : user);
		});
	},
	groupCount: (req, res) => {
		User.groupCount((error, users) => {
			res.json(error ? error : users);
		});
	},
	genderCount: (req, res) => {
		User.genderCount((error, users) => {
			res.json(error ? error : users);
		});
	},
	groupGenderCount: (req, res) => {
		User.groupGenderCount((error, users) => {
			res.json(error ? error : users);
		});
	}	
};

module.exports = users;

