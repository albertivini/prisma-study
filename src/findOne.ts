import prisma from "./prisma";

async function main() {

    const course = await prisma.courses.findFirst()

    console.log(course)
}

main()