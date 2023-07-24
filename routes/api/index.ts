import { Router } from 'express';
import postQuery from './post-query';
import categoryQuery from './category-query';

const apiRouter = Router();

apiRouter.use('/post', postQuery);
apiRouter.use('/category', categoryQuery);

export default apiRouter;
