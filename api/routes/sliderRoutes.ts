import { getSlider } from 'api/controllers/sliderController';
import * as express from 'express';

const router = express.Router();

router.route('/').get(getSlider);

export const sliderRoutes = router;
