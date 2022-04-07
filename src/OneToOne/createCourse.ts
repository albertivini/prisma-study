import prisma from "../prisma"

async function main() {
    const result = await prisma.courses.create({
        data: {
            name: 'Curso de java',
            duration: 500,
            description: 'Descrição',
            teacher: {
                connectOrCreate: {
                    where: {
                        name: 'Vinicius'
                    },
                    create: {
                        name: 'Vinicius'
                    }
                }
            }
        }
    })

    console.log(result)
}

main()