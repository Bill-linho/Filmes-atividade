import { searchController } from '../controllers/search.Controller.js';

if (searchController && !searchController.searchParams) {
  searchController.searchParams = searchController.search;
}