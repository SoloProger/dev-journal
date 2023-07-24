import { Router } from 'express';
import { PostController } from '../../src/post/controller';

const router = Router();
const controller = new PostController();

router.get('/', controller.posts);
router.get('/:id', controller.post);

export default router;
