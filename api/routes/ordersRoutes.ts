import { createOrder, getOrder, getOrders } from 'api/controllers/ordersController';
import * as express from 'express';

const router = express.Router();

router.route('/').get(getOrders).post(createOrder);
router.route('/:id').get(getOrder);

export const ordersRoutes = router;
