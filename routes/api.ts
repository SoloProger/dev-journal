import { Router } from 'express';
import postRouter from './post';

const apiRouter = Router();

apiRouter.use('/post', postRouter);

export default apiRouter;