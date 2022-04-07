import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main ()  {

    const result = await prisma.authors.create({
        data: {
            name: 'taligado',
            books: {
                createMany: {
                    data: [
                        {
                            name: 'boora'
                        },
                        {
                            name: 'grita'
                        }
                    ]
                }
            }
        }
    })

    console.log(result)
}

main()