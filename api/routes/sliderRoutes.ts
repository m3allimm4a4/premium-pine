import { getSlider, updateSlider } from 'api/controllers/sliderController';
import * as express from 'express';

const router = express.Router();

router.route('/').get(getSlider);
router.route('/:id').get(updateSlider);

export const sliderRoutes = router;
