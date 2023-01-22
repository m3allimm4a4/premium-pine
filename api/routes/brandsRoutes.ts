import { getBrands } from 'api/controllers/brandscontroller';
import * as express from 'express';

const router = express.Router();

router.route('/').get(getBrands);

export const brandsRoutes = router;
