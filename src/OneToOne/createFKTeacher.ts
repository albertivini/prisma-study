import prisma from "../prisma"

async function main() {
    const result = await prisma.courses.create({
        data: {
            name: 'Curso de s',
            duration: 1000,
            description: 'Descrição',
            fk_id_teacher: 'c6bc25d1-e940-455f-812a-ccecf86165a6'
        }
    })

    console.log(result)
}

main()