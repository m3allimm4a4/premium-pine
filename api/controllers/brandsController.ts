import { prisma } from 'api/models/prismaClient';
import * as express from 'express';

export async function getBrands(req: express.Request, res: express.Response): Promise<void> {
  try {
    const brands = await prisma.brands.findMany();
    res.status(200).json(brands);
  } catch (error: any) {
    res.status(500).json({
      message: error?.message,
    });
  } finally {
    await prisma.$disconnect();
  }
}
