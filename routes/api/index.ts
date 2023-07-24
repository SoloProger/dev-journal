import { Router } from 'express';
import postQuery from './post-query';

const apiRouter = Router();

apiRouter.use('/post', postQuery);

export default apiRouter;
