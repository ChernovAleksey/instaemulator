import { Router } from 'express';
import { getUsers, addUsers, updateUsers } from './usersController.js';

const usersRouter = Router();

usersRouter.get('', getUsers);
usersRouter.post('', addUsers);
usersRouter.put('', updateUsers);
export default usersRouter;