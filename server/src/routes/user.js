import express from 'express';
import { time } from '../controllers/user';

const router = express.Router();

router.get('/', time);

export default router;