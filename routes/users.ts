import { Router } from 'express';
import { deleteUser, getUsers, postUser, updateUser } from '../controllers/userController';

const router = Router();

router.get('/', getUsers);

router.post('/', postUser);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);

export { router };