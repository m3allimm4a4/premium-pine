import { getBanners, updateBanner } from 'api/controllers/bannersController';
import * as express from 'express';

const router = express.Router();

router.route('/').get(getBanners);
router.route('/:id').put(updateBanner);

export const bannersRoutes = router;
