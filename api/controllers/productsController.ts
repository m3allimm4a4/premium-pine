import { prisma } from 'api/models/prismaClient';
import { PrismaFindAllQuery } from 'api/models/prismaFindAllQuery.interface';
import * as express from 'express';

export async function getProducts(req: express.Request, res: express.Response): Promise<void> {
  const query: PrismaFindAllQuery = {};
  try {
    if (req.query['category']) {
      query.where = {
        ...query.where,
        categoryId: { equals: +req.query['category'] },
      };
    }
    if (req.query['brand']) {
      query.where = {
        ...query.where,
        brandId: { equals: +req.query['brand'] },
      };
    }
    if (req.query['search']) {
      query.where = {
        ...query.where,
        name: { contains: req.query['search'] },
      };
    }
    if (req.query['trending']) {
      query.where = {
        ...query.where,
        trending: Boolean(+req.query['trending']),
      };
    }
    if (req.query['newProducts']) {
      query.orderBy = { createdDate: 'desc' };
      query.take = 3;
    }

    const products = await prisma.products.findMany({
      include: {
        category: { select: { id: true, name: true } },
        brand: { select: { id: true, name: true } },
      },
      ...query,
    });
    res.status(200).json(products);
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function getProduct(req: express.Request, res: express.Response): Promise<void> {
  try {
    const id = +req.params['id'];
    if (!id) throw new Error('You must provide a product ID');
    const product = await prisma.products.findFirstOrThrow({
      include: {
        category: { select: { id: true, name: true } },
        brand: { select: { id: true, name: true } },
      },
      where: {
        id: id,
      },
    });
    res.status(200).json(product);
  } catch (error: any) {
    res.status(500).json({
      message: error?.message,
    });
  }
}
