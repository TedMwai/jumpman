import prisma from "../../../lib/prisma";

export default async function handle(req, res) {
  if (req.method === "POST") {
    handlePost(req, res);
  } else {
    handleGet(req, res);
  }
}

async function handleGet(req, res) {
  const { email } = req.query;
  const userId = await prisma.user.findUnique({
    where: {
      email: email,
    },
    select: {
      user_id: true,
    },
  });
  const cart = await prisma.cart.findMany({
    where: {
      user_id: userId.user_id,
    },
    include: {
      products: {
        select: {
          products_id: true,
          name: true,
          price: true,
          photo: true,
        },
      },
    },
  });
  res.json(cart);
}

async function handlePost(req, res) {
  const { product, email, quantity, size } = req.body;
  const datetime = new Date();
  const userId = await prisma.user.findUnique({
    where: {
      email: email,
    },
    select: {
      user_id: true,
    },
  });
  const cartItems = await prisma.cart.upsert({
    where: {
      product_id: product.products_id,
    },
    update: {
      quantity: {
        increment: quantity,
      },
    },
    create: {
      user_id: userId.user_id,
      product_id: product.products_id,
      size: size,
      quantity: quantity,
      created_at: datetime,
    },
  });
  res.json(cartItems);
}
