import prisma from "./prisma"

async function main() {

    const result = await prisma.courses.update({
        where: {
            id: "1524e92c-8600-4a7d-a47d-37e22828e609"
        },
        data: {
            duration: 150
        }
    })

    console.log(result)
}

main()