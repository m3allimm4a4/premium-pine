import { getProduct, getProducts } from 'api/controllers/productsController';
import * as express from 'express';

const router = express.Router();

router.route('/').get(getProducts);
router.route('/:id').get(getProduct);

export const productsRoutes = router;
