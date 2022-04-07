import prisma from "../prisma"

async function main() {

    const result = await prisma.courses.findMany({
        where:{
            name: {
                startsWith: 'Curso',
                // deixa case insensitive
                mode: 'insensitive'
            }
        }
    })

    console.log(result)
}

main()