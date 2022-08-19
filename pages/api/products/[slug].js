import prisma from "../../../lib/prisma";

export default async function getProduct(req, res) {
  const { slug } = req.query;
  const product = await prisma.products.findFirst({
    where: {
      product_slug: slug,
    },
  });
  const pics = await prisma.Productimage.findMany({
    where: {
      product_slug: slug,
    },
  });
  // console.log(product.category_id);
  const similarProducts =
    await prisma.$queryRaw`SELECT * FROM products WHERE categoryId <> ${product.categoryId} ORDER BY RAND() LIMIT 6`;
  const image = pics.map((image) => image.image);
  const data = { product, image, similarProducts };
  res.json(data);
}
