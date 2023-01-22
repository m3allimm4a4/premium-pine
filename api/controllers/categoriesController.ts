import { prisma } from 'api/models/prismaClient';
import * as express from 'express';

export async function getCategories(req: express.Request, res: express.Response): Promise<void> {
  try {
    const categories = await prisma.categories.findMany();
    res.status(200).json(categories);
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function deleteCategory(req: express.Request, res: express.Response): Promise<void> {
  try {
    const id = +req.params['id'];
    if (!id) throw new Error('Invalid ID');
    await prisma.categories.delete({
      where: {
        id: id,
      },
    });
    res.status(204).send();
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function createCategory(req: express.Request, res: express.Response): Promise<void> {
  try {
    const name: string = req.body.name;
    if (!name) throw new Error('Invalid Name');
    const newCategory = await prisma.categories.create({
      data: {
        name: name,
      },
    });
    res.status(200).json(newCategory);
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function updateCategory(req: express.Request, res: express.Response): Promise<void> {
  try {
    const id: number = req.body.id;
    const name: string = req.body.name;
    if (!id || !name) throw new Error('Invalid Data');

    const newCategory = await prisma.categories.update({
      data: {
        name: {
          set: name,
        },
      },
      where: {
        id: id,
      },
    });
    res.status(200).json(newCategory);
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
    });
  }
}
