import { Router } from 'express';
import { CategoryController } from '../../src/category/controller';

const router = Router();
const controller = new CategoryController();

router.post('/', controller.createCategory);
router.put('/:id', controller.updateCategory);
router.delete('/:id', controller.deleteCategory);

export default router;
