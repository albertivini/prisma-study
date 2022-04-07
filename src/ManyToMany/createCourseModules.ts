import prisma from "../prisma"

async function main() {

    const result = await prisma.coursesModules.create({
        data:{
            fk_id_course: '75fb7e49-8916-4d7a-a775-c5dae4bc5fb9',
            fk_id_module: 'c95f129f-a88c-41ff-bf50-f66328fc8e38'
        }
    })

    console.log(result)
}

main()