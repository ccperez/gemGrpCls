import express from 'express';
import usersclass from '../controllers/usersclass';

// validators
import { runValidation } from '../validators';
import { userClassCreateValidator } from '../validators/userclass';
import { requireSignin, adminMiddleware } from '../controllers/auth';

const router = express.Router();

	// list all/single class
	router.get('/usersclass/:id_class?', usersclass.list);
	// add new user in class
	router.post('/usersclass', userClassCreateValidator, runValidation, requireSignin, adminMiddleware, usersclass.addUser);
	// delete user in class
	router.delete('/usersclass/:id_class/:id_user', requireSignin, adminMiddleware, usersclass.deleteUser);
	// delete all user in class
	router.delete('/usersclass/:id_class', requireSignin, adminMiddleware, usersclass.deleteAllUser);	

export default router;