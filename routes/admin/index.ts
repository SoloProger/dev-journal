import { Router } from 'express';
import PostCommands from './post-commands';

const adminRouter = Router();

adminRouter.use('/post', PostCommands);

export default adminRouter;
