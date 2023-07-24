import { Router } from 'express';
import { CategoryController } from '../../src/category/controller';

const router = Router();
const controller = new CategoryController();

router.get('/', controller.categories);
router.get('/:id', controller.category);

export default router;
