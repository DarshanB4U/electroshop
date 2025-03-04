import { Router } from 'express';
import { productController } from '../controllers/productController';

const router = Router();

router.get('/', productController.getAllProducts);
// router.get('/:id', productController.getProduct);
router.post('/', productController.createProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

export default router; 