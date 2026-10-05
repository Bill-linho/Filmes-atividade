import { Router } from 'express';
import { searchController } from '../controllers/search.Controller.js';

const searchRouter = Router();

searchRouter.get('/category/:category/year/:year', searchController.search);

searchRouter.get('/', searchController.search);

export default searchRouter;