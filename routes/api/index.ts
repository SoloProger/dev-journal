import { Router } from 'express';
import postQuery from './post-query';
import categoryQuery from './category-query';
import { auth } from '../../core/middlewares/auth.middleware';

const apiRouter = Router();

apiRouter.use('/post', postQuery);
apiRouter.use('/category', [auth], categoryQuery);

export default apiRouter;
