import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export const wishlistController = {
  addToWishlist: async (req: Request, res: Response) => {
    try {
      const { userId, productId } = req.body;
      await prisma.user.update({
        where: { id: userId },
        data: {
          wishlist: {
            connect: { id: productId }
          }
        }
      });
      res.json({ message: 'Added to wishlist' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to add to wishlist' });
    }
  },

  removeFromWishlist: async (req: Request, res: Response) => {
    try {
      const { userId, productId } = req.params;
      await prisma.user.update({
        where: { id: parseInt(userId) },
        data: {
          wishlist: {
            disconnect: { id: parseInt(productId) }
          }
        }
      });
      res.json({ message: 'Removed from wishlist' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to remove from wishlist' });
    }
  },

  getWishlist: async (req: Request, res: Response) => {
    try {
      const { userId } = req.params;
      const wishlist = await prisma.user.findUnique({
        where: { id: parseInt(userId) },
        include: { wishlist: true }
      });
      res.json(wishlist?.wishlist || []);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch wishlist' });
    }
  }
}; 