import prisma from "../../lib/prisma";
import { getSession } from "next-auth/react";

export default async function handle(req, res) {
  if (req.method === "POST") {
    try {
      handlePost(req, res);
    } catch (error) {
      res.status(502).send(error);
    }
  } else {
    try {
      handleGet(req, res);
    } catch (error) {
      res.status(502).send(error);
    }
  }
}

const handleGet = async (req, res) => {
  const session = await getSession({ req });
  if (!session) {
    return res.status(401).json({ message: "Unauthorized." });
  }
  const userId = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
    select: {
      id: true,
    },
  });
  const quantity =
    await prisma.$queryRaw`SELECT SUM(quantity) AS quantity FROM cart LEFT JOIN 
    products ON products.id = cart.productId WHERE userId = ${userId.id}`;
  const price =
    await prisma.$queryRaw`SELECT SUM(cart.quantity*products.price) as TOTAL FROM cart 
    LEFT JOIN products ON products.id = cart.productId WHERE userId = ${userId.id}`;
  const cartItems =
    await prisma.$queryRaw`SELECT cart.id, cart.userId, cart.productId, cart.size, cart.quantity, 
    products.categoryId, products.name, products.price, products.photo, products.product_slug 
    FROM cart LEFT JOIN products ON products.id = cart.productId WHERE userId = ${userId.id}`;
  const cart = { cartItems, quantity, price };
  res.json(cart);
};

const handlePost = async (req, res) => {
  const session = await getSession({ req });
  if (!session) {
    return res.status(401).json({ message: "Unauthorized." });
  }
  const { product, quantity, size } = req.body;
  const datetime = new Date();
  const userId = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
    select: {
      id: true,
    },
  });
  const cartItems = await prisma.cart.upsert({
    where: {
      productId: product.id,
    },
    update: {
      quantity: {
        increment: quantity,
      },
    },
    create: {
      userId: userId.id,
      productId: product.id,
      size: size,
      quantity: quantity,
      created_at: datetime,
    },
  });
  res.json(cartItems);
};
