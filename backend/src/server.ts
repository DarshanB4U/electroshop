const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
import productRoutes from './routes/productRoutes';
import authRoutes from './routes/authRoutes';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/products', productRoutes);
app.use('/auth', authRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 