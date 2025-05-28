import express from 'express';
import { deleteUser, getUsers, postUser, putUser } from '../controller/userController.js';


const router = express.Router();

router.get('/', getUsers);
router.post('/', postUser);
router.put('/:id', putUser);
router.delete('/:id', deleteUser);

export default router;