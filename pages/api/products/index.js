import prisma from "../../../lib/prisma";

export default async function getProducts(req, res) {
  const jordans =
    await prisma.$queryRaw`SELECT * FROM products WHERE categoryId = 1 ORDER BY rand() LIMIT 4;`;
  const nike =
    await prisma.$queryRaw`SELECT * FROM products WHERE categoryId = 2 ORDER BY rand() LIMIT 4;`;
  const adidas =
    await prisma.$queryRaw`SELECT * FROM products WHERE categoryId = 3 ORDER BY rand() LIMIT 4;`;
  const puma =
    await prisma.$queryRaw`SELECT * FROM products WHERE categoryId = 4 ORDER BY rand() LIMIT 4;`;

  const products = {
    jordans,
    nike,
    adidas,
    puma,
  };
  res.json(products);
}
