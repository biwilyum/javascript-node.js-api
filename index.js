import express from 'express';
import orderRoutes from './src/routes/orderRoutes.js';

const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Use the order routes, prefixing all paths with /api/orders
app.use('/api/orders', orderRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Order API running on http://localhost:${PORT}/api/orders`);
});