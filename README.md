# ElectroShop - E-commerce Platform

ElectroShop is a modern e-commerce platform built with React, TypeScript, and Node.js, featuring a responsive design and comprehensive user authentication system.

## Features

- 🛍️ Product browsing and searching
- 🔐 User authentication (Login/Register)
- 🛒 Shopping cart functionality
- 💫 Responsive design
- ⭐ Product ratings and reviews
- 📱 Mobile-friendly interface
- 🎯 Admin dashboard
- 💜 Wishlist functionality

## Tech Stack

### Frontend

- React
- TypeScript
- TailwindCSS
- Axios
- React Router DOM

### Backend

- Node.js
- Express
- PostgreSQL
- Prisma ORM
- JWT Authentication
- bcrypt

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- PostgreSQL
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/DarshanB4U/electroshop.git
cd electroshop
```

2. Install dependencies

```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

3. Environment Setup

```bash
# In backend directory, create .env file
DATABASE_URL="postgresql://username:password@localhost:5432/electroshop"
PORT=5000
JWT_SECRET="your-secret-key"
```

4. Database Setup

```bash
# In backend directory
npx prisma migrate dev
```

5. Start the application

```bash
# Start backend (from backend directory)
npm run dev

# Start frontend (from frontend directory)
npm run dev
```

## Project Structure

```
electroshop/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── middleware/
│   │   └── server.ts
│   ├── prisma/
│   └── package.json
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── context/
    │   ├── services/
    │   └── App.tsx
    └── package.json
```

## API Endpoints

### Authentication

- `POST /auth/register` - Register new user
- `POST /auth/login` - User login
- `GET /auth/me` - Get current user

### Products

- `GET /products` - Get all products
- `GET /products/:id` - Get single product
- `POST /products` - Create product (Admin)
- `PUT /products/:id` - Update product (Admin)
- `DELETE /products/:id` - Delete product (Admin)

### Wishlist

- `POST /wishlist` - Add to wishlist
- `DELETE /wishlist/:productId` - Remove from wishlist
- `GET /wishlist` - Get user's wishlist

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
