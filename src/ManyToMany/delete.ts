import prisma from "../prisma"

async function main() {

    const result = await prisma.coursesModules.delete({
        where: {
            id: '0e572dc1-1cd6-4dc5-a1da-55a08f4c562b'
        }
    })

    console.log(result)
}

main()