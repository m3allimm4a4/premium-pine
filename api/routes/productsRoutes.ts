import {
  createProduct,
  deleteProducts,
  getProduct,
  getProducts,
  updateProduct,
} from 'api/controllers/productsController';
import * as express from 'express';

const router = express.Router();

router.route('/').get(getProducts).post(createProduct);
router.route('/:id').get(getProduct).put(updateProduct).delete(deleteProducts);

export const productsRoutes = router;
