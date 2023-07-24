import { Router } from 'express';
import postCommands from './post-commands';
import categoryCommands from './category-commands';

const adminRouter = Router();

adminRouter.use('/post', postCommands);
adminRouter.use('/category', categoryCommands);

export default adminRouter;
