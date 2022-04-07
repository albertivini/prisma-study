import prisma from "../prisma"

async function main() {

    const result = await prisma.modules.create({
        data: {
            name: 'nameee',
            description: 'descricao',
            coursesModules: {
                create: {
                    course: {
                        connect: {
                            id: '189d363a-05f7-4d1f-8d57-c94442f331ad'
                        }
                    }
                }
            }
        }
    })

    console.log(result)
}

main()