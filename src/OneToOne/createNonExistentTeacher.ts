import prisma from "../prisma"

async function main() {
    const result = await prisma.courses.create({
        data: {
            name: 'Curso de Fodase',
            duration: 1000,
            description: 'Descrição',
            teacher: {
                create: {
                    name: 'Name',
                }
            }
        }
    })

    console.log(result)
}

main()