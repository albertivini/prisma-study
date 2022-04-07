import prisma from "../prisma"

async function main() {

    const result = await prisma.courses.findMany({
        include: {
            coursesModules: true,
            teacher: true
        }
    })

    console.log(result)
}

main()