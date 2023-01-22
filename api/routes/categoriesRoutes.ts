import {
  createCategory,
  deleteCategory,
  getCategories,
  updateCategory,
} from 'api/controllers/categoriesController';
import * as express from 'express';

const router = express.Router();

router.route('/').get(getCategories).post(createCategory).put(updateCategory);
router.route('/:id').delete(deleteCategory);

export const categoriesRoutes = router;
