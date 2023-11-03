const { Order, User, ClothingModel, Fabric, Shipping, Payment } = require('../models');

const OrderController = {

    // Get all orders
    getAllOrders: async (req, res) => {
        try {
            const orders = await Order.findAll({
                include: [
                    { model: User, as: 'user' },
                    { model: ClothingModel, as: 'clothingModel' },
                    { model: Fabric, as: 'fabric' },
                    { model: Shipping, as: 'shipping' },
                    { model: Payment, as: 'payment' }
                ]
            });
            res.status(200).json(orders);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Get a single order by its ID
    getOrderById: async (req, res) => {
        try {
            const orderId = req.params.id;
            const order = await Order.findByPk(orderId, {
                include: [
                    { model: User, as: 'user' },
                    { model: ClothingModel, as: 'clothingModel' },
                    { model: Fabric, as: 'fabric' },
                    { model: Shipping, as: 'shipping' },
                    { model: Payment, as: 'payment' }
                ]
            });
            if (order) {
                res.status(200).json(order);
            } else {
                res.status(404).json({ message: "Order not found" });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Create a new order
    createOrder: async (req, res) => {
        try {
            const orderData = req.body;
            const newOrder = await Order.create(orderData);
            res.status(201).json({ message: 'Order created successfully', order: newOrder });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Update an existing order
    updateOrder: async (req, res) => {
        try {
            const orderId = req.params.id;
            const updatedData = req.body;
            const order = await Order.findByPk(orderId);
            if (order) {
                await order.update(updatedData);
                res.status(200).json({ message: 'Order updated successfully', order: order });
            } else {
                res.status(404).json({ message: "Order not found" });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Delete an order
    deleteOrder: async (req, res) => {
        try {
            const orderId = req.params.id;
            const order = await Order.findByPk(orderId);
            if (order) {
                await order.destroy();
                res.status(200).json({ message: 'Order deleted successfully' });
            } else {
                res.status(404).json({ message: "Order not found" });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = OrderController;
