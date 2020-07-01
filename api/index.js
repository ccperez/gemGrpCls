import express from 'express';
import User from '../models/User';

const router = express.Router();

// list all/single user's
router.get('/user/:id?', (req, res, next) => {
  const id = req.params.id;
  if (id) {
    User.find(id, (error, user) => {
      res.json(error ? error : user[0]);
    });
  } else {
    User.all((error, users) => {
      res.json(error ? error : users);
    });
  }
});

// add new user
router.post('/user/', (req, res, next) => {
  const user = req.body;
  User.create(user, (error, user) => {
    res.json(error ? error : user);
  });
});

// update user
router.put('/user/:id', (req, res, next) => {
  const id = req.params.id;
  const user = req.body; 
  User.update(id, user, (error, user) => {
    res.json(error ? error : user[0]);
  });
});

// delete user
router.delete('/user/:id', (req, res, next) => {
  const id = req.params.id;
  User.delete(id, (error, user) => {
    res.json(error ? error : user);
  });
});

export default router;