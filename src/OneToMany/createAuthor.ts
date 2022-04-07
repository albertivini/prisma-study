import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main ()  {
    const result = await prisma.authors.create({
        data: {
            name: 'author',
            books: {
                create: {
                    name: "Codigo "
                }
            }
        }
    })

    console.log(result)
}

main()