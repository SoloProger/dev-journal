import { Router } from 'express';
import { PostController } from '../../src/post/controller';

const router = Router();
const controller = new PostController();

router.post('/', controller.createPost);
router.put('/:id', controller.updatePost);
router.delete('/:id', controller.deletePost);

export default router;
