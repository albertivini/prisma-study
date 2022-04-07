import prisma from "../prisma"

async function main() {

    const result = await prisma.coursesModules.create({
        data: {
            course: {
                create: {
                    name: 'nome do curso',
                    duration: 200,
                    description: 'description',
                    teacher: {
                        create: {
                            name: 'nome dele'
                        }
                    }
                }
            },
            module: {
                create: {
                    name: 'curso completo',
                    description: 'nome'
                }
            }
        }
    })

    console.log(result)
}

main()