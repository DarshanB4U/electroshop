import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export const productController = {
  // Get all products
  getAllProducts: async (req: Request, res: Response) => {
    try {
      const products = await prisma.product.findMany();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch products' });
    }
  },

  // Get single product
  getProduct: async (req: Request, res: Response) => {
    try {
      const product = await prisma.product.findUnique({
        where: { id: parseInt(req.params.id) }
      });
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
      res.json(product);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch product' });
    }
  },

  // Create product
  createProduct: async (req: Request, res: Response) => {
    try {
      const product = await prisma.product.create({
        data: req.body
      });
      res.status(201).json(product);
      console.log(product);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create product' });
      console.log(error);
    }
  },

  // Update product
  updateProduct: async (req: Request, res: Response) => {
    try {
      const product = await prisma.product.update({
        where: { id: parseInt(req.params.id) },
        data: req.body
      });
      res.json(product);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update product' });
    }
  },

  // Delete product
  deleteProduct: async (req: Request, res: Response) => {
    try {
      await prisma.product.delete({
        where: { id: parseInt(req.params.id) }
      });
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete product' });
    }
  }
}; 