import { catchAsync } from 'api/shared/catchAsync';
import { prisma } from 'api/models/prismaClient';
import * as express from 'express';

export const getSlider = catchAsync(
  async (req: express.Request, res: express.Response): Promise<void> => {
    const sliderItems = await prisma.slider.findMany();
    res.status(200).json(sliderItems);
  }
);
