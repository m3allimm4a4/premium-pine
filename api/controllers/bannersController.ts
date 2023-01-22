import { catchAsync } from 'api/catchAsync';
import { prisma } from 'api/models/prismaClient';
import * as express from 'express';

export const getBanners = catchAsync(
  async (req: express.Request, res: express.Response): Promise<void> => {
    const banners = await prisma.banners.findMany();
    res.status(200).json(banners);
  }
);
