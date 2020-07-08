import express from 'express';
import { signin } from '../controllers/auth';
// validators
import { runValidation } from '../validators';
import { userSigninValidator } from '../validators/auth';
import { requireSignin } from '../controllers/auth';

const router = express.Router();

	router.post('/signin', userSigninValidator, runValidation, signin);

	// test
	// router.get('/secret', requireSignin, (req, res) => {
	// 	res.json({ user: req.userEmail });
	// });

export default router;