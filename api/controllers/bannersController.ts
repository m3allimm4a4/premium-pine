import { prisma } from 'api/models/prismaClient';
import * as express from 'express';

export async function getBanners(req: express.Request, res: express.Response): Promise<void> {
  try {
    const banners = await prisma.banners.findMany();
    res.status(200).json(banners);
  } catch (error: any) {
    res.status(500).json({
      message: error?.message,
    });
  }
}
