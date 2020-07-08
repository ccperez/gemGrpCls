import User from '../models/user';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import config from '../../config';

exports.signin = (req, res) => {
	const { email, password } = req.body;
	User.findbyEmail(email, (error, user) => {
		if (error || !user[0]) {
			res.status(400).json({ error: 'User with that email does not exist. Please signup.' });
		} else {
			const authenticate = bcrypt.compareSync(password, user[0].password);
			if (authenticate) {
				const token = jwt.sign({ id: user[0].id }, config.secret, { expiresIn: '1h' });
				const { id, email, role } = user[0];
				res.json({ token, user: { id, email, role } });
			} else {
				res.status(400).json({ error: 'Email and password do not match.' });
			}
		}
	});
};

exports.requireSignin = (req, res, next) => {
	const token = req.headers.authorization.split(' ')[1];
	if (!token) {
		res.status(403).json({ error: 'Failed: No token provided.' });
	} else {    
		jwt.verify(token, config.secret, (error, decoded) => {
			if (error) {
				res.status(500).json({ error: 'Failed: invalid token.' });
			} else {  
				req.userId = decoded.id;
				next();
			}
		});
	}
};

exports.adminMiddleware = (req, res, next) => {
	const adminUserId = req.userId;	
	User.findbyRole(adminUserId, (error, user) => {
		if (error || !user[0]) {
			res.status(400).json({ error: 'User not found' });
		} else {
			if (user[0].role !== 1) {
				res.status(400).json({ error: 'Admin resource. Access denied' });
			} else {
				req.profile = user[0];
				next();
			}
		}
	});
};