import prisma from "../prisma";

async function main() {
    const result = await prisma.books.create({
        data: {
            name: "Livro foda",
            author_id: 'a2f3875b-9562-4198-b171-180fa0765cbd'
        }
    })

    console.log(result)
}

main()