import { Router } from 'express';
import {
  getPopular,
  getProducts,
  getProduct,
  getFilters,
  getCategorys,
  getOptions,
  getMainSlider,
} from '../controllers/routers.js';

const router = Router();

/* GET products. */
router.get('/api/popular', getPopular);

router.get('/api/products', getProducts);

router.get('/api/product', getProduct);

// get Filters
router.get('/api/filters', getFilters);

//categorys

router.get('/api/categorys', getCategorys);

//user
router.get('/api/options', getOptions);

//sliders
router.get('/api/slider', getMainSlider);



export default router;
//успешный запрос .status(200)
//создаем 201