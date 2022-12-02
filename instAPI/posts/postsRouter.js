import { Router } from 'express';
import { getPosts, addPosts, updatePosts } from './postsController.js';

const postsRouter = Router();

postsRouter.get('', getPosts);
postsRouter.post('', addPosts);
postsRouter.put('', updatePosts);
export default postsRouter;