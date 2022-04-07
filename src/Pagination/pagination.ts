import prisma from "../prisma"

async function main() {

    let skip = 0

    let exist = true

    while (exist) {
        const result = await prisma.courses.findMany({
            // quantidade de dados q vai pular
            skip: skip,
            // quantidade de dados q vai pegar
            take: 2
        })

        skip += 2
    
        console.log(result)
        console.log('----------')

        if(result.length <= 0) {
            exist = false
        }
    }


}

main()