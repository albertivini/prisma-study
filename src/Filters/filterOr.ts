import prisma from "../prisma"

async function main() {

    const result = await prisma.courses.findMany({
        where:{
            OR: [
                {
                    name: {
                        contains: 'de',
                        mode: 'insensitive'
                    }
                },
                {
                    description: {
                        contains: 'descr',
                        mode: 'insensitive',
                    }
                }
            ],
            AND: {
                duration: 1000
            }
        }
    })

    console.log(result)
}

main()