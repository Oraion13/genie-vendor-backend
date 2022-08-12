import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const main = async () => {
    await prisma.$connect

    const allUsers = await prisma.user.findMany({});
    console.log(allUsers)
}

module.exports = main