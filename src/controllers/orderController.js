import OrderService from "../services/orderService.js";

class OrderController {
    constructor() {
        this.orderService = new OrderService();
        
        // Auto-bind methods to preserve 'this' context
        this.getAll = this.getAll.bind(this);
        this.getById = this.getById.bind(this);
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }

    async getAll(req, res) {
        try {
            const orders = await this.orderService.getAll();
            res.json(orders);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Failed to fetch orders." });
        }
    }

    async getById(req, res) {
        try {
            const id = req.params.id;
            const order = await this.orderService.getById(id);
            if (!order) {
                return res.status(404).json({ message: "Order not found." });
            }
            res.json(order);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Error retrieving order." });
        }
    }

    async create(req, res) {
        try {
            const { customerName, productName, quantity } = req.body;
            
          
            if (!customerName || !productName || !quantity) {
                return res.status(400).json({ message: "Missing required fields." });
            }

            const newOrder = await this.orderService.create({
                customerName,
                productName,
                quantity: parseInt(quantity),
            });
            res.status(201).json(newOrder);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Failed to create order." });
        }
    }

    async update(req, res) {
        try {
            const updated = await this.orderService.update(req.params.id, req.body);
            res.json(updated);
        } catch (error) {
            console.error(error);
            res.status(404).json({ message: "Order not found." });
        }
    }

    async delete(req, res) {
        try {
            await this.orderService.delete(req.params.id);
            res.json({message: "Order deleted"});
        } catch (error) {
            console.error(error);
            res.status(404).json({ message: "Order not found." });
        }
    }
}

export default OrderController;