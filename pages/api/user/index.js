import prisma from "../../../lib/prisma";

export default async function handle(req, res) {
  //   console.log(req.body);
  const { given_name, family_name, email } = req.body;
  var datetime = new Date();
  //   const createdAt = datetime.toISOString().slice(0, 10)
  const result = await prisma.user.upsert({
    where: {
      email: email,
    },
    update: {},
    create: {
      email: email,
      first_name: given_name,
      last_name: family_name,
      created_at: datetime,
    },
  });
  res.json(result);
}
