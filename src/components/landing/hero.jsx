import Header from "./header";


function Hero() {
    return(
      <section className="">
          <div className="relative overflow-hidden">
            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10">
              <div className="max-w-2xl text-center mx-auto">
                <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl">Reúna as tarefas, colegas de equipe e ferramentas</h1>
                <p className="mt-3 text-lg text-gray-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id impedit beatae assumenda eligendi non nulla in minus veritatis minima magnam.</p>

                <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent bg-indigo-700 text-white hover:bg-gray-900 disabled:opacity-50">Comece agora</button>

                <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-full border border-gray-800 text-gray-800 hover:border-gray-500 hover:text-gray-500">Ver preços </button>
              </div>

              <div className="mt-10 relative max-w-5xl mx-auto">
                <div className="w-full object-cover h-96 sm:h-[480px] bg-[url('https://img.freepik.com/fotos-gratis/papel-de-parede-padrao-de-fundo-abstrato-grunge-preto-com-foto-gratis_1340-33848.jpg')] bg-no-repeat bg-center bg-cover rounded-xl"></div>

                <div className="absolute bottom-12 -start-20 -z-[1] w-48 h-48 bg-gradient-to-b from-purple-500 to-pink p-px rounded-lg dark:to-slate-900">
                  <div className="bg-white w-48 h-48 rounded-lg "></div>
                </div>

                <div className="absolute -top-12 -end-20 -z-[1] w-48 h-48 bg-gradient-to-t from-pink-600 to-purple-400 p-px rounded-full">
                  <div className="bg-white w-48 h-48 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
      </section>
    );
}

export default Hero