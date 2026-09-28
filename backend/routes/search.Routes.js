import { Router } from 'express';
import { searchController } from '../controllers/search.Controller.js';

const searchRouter = Router();

searchRouter.get('/:year/:category', searchController.searchParams);

export default searchRouter;