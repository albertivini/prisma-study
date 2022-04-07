import prisma from "../prisma"
import { Prisma, Modules } from "@prisma/client"

async function main() {

    // eh possivel tipar query raw
    const result = await prisma.$queryRaw<Modules[]>(Prisma.sql`SELECT * from modules`)

    console.log(result)

}

main()