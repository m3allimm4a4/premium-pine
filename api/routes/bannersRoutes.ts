import { getBanners } from 'api/controllers/bannersController';
import * as express from 'express';

const router = express.Router();

router.route('/').get(getBanners);

export const bannersRoutes = router;
