import db from '../config/prisma.js';

class OrderService {
    async getAll() {
        return db.order.findMany();
    }

    async getById(id) {
        return db.order.findUnique({
            where: { id: parseInt(id) },
        });
    }

    async create(data) {
        return db.order.create({ data: data }); // Note: I used 'data' instead of '[ data ]' to match standard Prisma syntax for object creation
    }

    async update(id, data) {
        return db.order.update({
            where: { id: parseInt(id) },
            data,
        });
    }

    async delete(id) {
        return db.order.delete({
            where: { id: parseInt(id) },
        });
    }
}

export default OrderService;