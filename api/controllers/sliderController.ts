import { prisma } from 'api/models/prismaClient';
import * as express from 'express';

export async function getSlider(req: express.Request, res: express.Response): Promise<void> {
  try {
    const sliderItems = await prisma.slider.findMany();
    res.status(200).json(sliderItems);
  } catch (error: any) {
    res.status(500).json({
      error: error.message,
    });
  }
}
