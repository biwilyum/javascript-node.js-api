import express from 'express';
import OrderController from '../controllers/orderController.js';

const router = express.Router();

// Instantiate the controller
const orderController = new OrderController();

// Map routes to controller methods
router.get('/', orderController.getAll);
router.get('/:id', orderController.getById);
router.post('/', orderController.create);
router.put('/:id', orderController.update); 
router.delete('/:id', orderController.delete); 

export default router;