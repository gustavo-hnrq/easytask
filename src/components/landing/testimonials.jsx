function Testimonials () {
    return(

        <section>
        <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <h2 className="text-center text-xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-700">O QUE ESTÃO DIZENDO</h2>
        <h1 class="text-2xl font-bold text-center text-gray-800 lg:text-5xl ">
            Palavras dos nossos usuários
        </h1>
        <p className="text-center text-lg text-gray-600 mt-10">Veja como a EasyTask revoluciona a gestão de projetos. Descubra experiências <br /> dos usuários e transforme a colaboração da sua equipe.</p>



        <section class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3">
            <div class="p-8 border rounded-lg hover:scale-105 duration-300">
                <p class="leading-loose text-gray-600">
                "Encontrar uma ferramenta de gerenciamento de projetos tão intuitiva e eficiente foi um divisor de águas para nossa equipe. O EasyTask simplificou nossa colaboração e melhorou significativamente a visibilidade de nossos projetos."
                </p>

                <div class="flex items-center mt-8 -mx-2">
                    <img class="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 " src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />

                    <div class="mx-2">
                        <h1 class="font-semibold text-gray-800 ">Gustavo</h1>
                        <span class="text-sm text-gray-500">Front-End da Meta</span>
                    </div>
                </div>
            </div>

            <div class="p-8 border rounded-lg hover:scale-105 duration-300">
                <p class="leading-loose text-gray-600 ">
                "Eu amo muito a flexibilidade do <br /> EasyTask! Personalizar as colunas e categorias de acordo com as necessidades do meu projeto tornou o gerenciamento de tarefas uma experiência personalizada e altamente eficaz. "               </p>

                <div class="flex items-center mt-8 -mx-2">
                    <img class="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 " src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />

                    <div class="mx-2">
                        <h1 class="font-semibold text-gray-800">Eloisa</h1>
                        <span class="text-sm text-gray-500">Tech Lead da Google</span>
                    </div>
                </div>
            </div>

            <div class="p-8 border rounded-lg  hover:scale-105 duration-300">
                <p class="leading-loose text-gray-600">
                "A colaboração em tempo real nos permitiu trabalhar de forma mais conectada, mesmo quando estamos em locais diferentes. É incrível ver como as atualizações são refletidas instantaneamente, mantendo toda a equipe na mesma página."
                </p>

                <div class="flex items-center mt-8 -mx-2">
                    <img class="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 " src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                    <div class="mx-2">
                        <h1 class="font-semibold text-gray-800 ">Melissa</h1>
                        <span class="text-sm text-gray-500">UI/UX Designer da Apple</span>
                    </div>
                </div>
            </div>
        </section>
    </div>
</section>

    )
}

export default Testimonials