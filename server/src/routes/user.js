import express from 'express';
import users from '../controllers/users';

const router = express.Router();

	router.get('/users/:id?', users.list);
	router.get('/usersgroup/:group?', users.group);
	router.get('/usersgroupcount', users.groupCount);	
	router.get('/usersgendercount', users.genderCount);	
	router.get('/usersgroupgendercount', users.groupGenderCount);

	// router.post('/users', users.create);
	// router.put('/users/:id', users.update);
	// router.delete('/users/:id', users.delete);
	
export default router;