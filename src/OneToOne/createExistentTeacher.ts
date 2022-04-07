import prisma from "../prisma"

async function main() {
    const result = await prisma.courses.create({
        data: {
            name: 'Curso de Node',
            duration: 1000,
            description: 'Descrição',
            teacher: {
                connect: {
                    id: '88fa87f5-6bb3-40cf-b81b-807dc5fa62b3'
                }
            }
        }
    })

    console.log(result)
}

main()