import { deleteProducts, getProduct, getProducts } from 'api/controllers/productsController';
import * as express from 'express';

const router = express.Router();

router.route('/').get(getProducts);
router.route('/:id').get(getProduct).delete(deleteProducts);

export const productsRoutes = router;
