import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function aa() {
    const result = await prisma.courses.create({
        data: {
            name: 'chora haters',
            duration: 100,
            description: 'curso'
        }
    })

    console.log(result)
}

aa()