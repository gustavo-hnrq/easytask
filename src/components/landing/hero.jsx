
function Hero() {
    return(
      <section className="">
          <div className="relative overflow-hidden">
            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10">
              <div className="max-w-2xl text-center mx-auto">
                <h1 className="block text-7xl font-bold text-gray-800 sm:text-4xl md:text-5xl">Reúna as tarefas, colegas de equipe e ferramentas</h1>
                <p className="mt-6 text-lg text-gray-600 mb-6">Simples e flexível. Bastam quadros, listas e cartões para obter uma visualização clara de quem está fazendo o que e o que precisa ser feito.</p>

                
                <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent bg-indigo-700 text-white hover:bg-gray-900 mr-2 hover:scale-105 duration-300">Comece agora</button>

                <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-full border border-gray-800 text-gray-800 hover:border-gray-500 hover:text-gray-500 mb-6 hover:scale-105 duration-300">Ver preços </button>
              </div>

              <div className="mt-10 relative max-w-5xl mx-auto">
                <div className="w-full object-cover h-96 sm:h-[480px] bg-[url('https://www.icolorpalette.com/download/solidcolorimage/000000_solid_color_background_icolorpalette.png')] bg-no-repeat bg-center bg-cover rounded-xl"></div>

                <div className="absolute bottom-12 -start-20 -z-[1] w-128 h-48 bg-gradient-to-b from-purple-500 to-indigo-700 p-px rounded-lg">
                  <div className="bg-white w-48 h-48 rounded-lg "></div>
                </div>

                <div className="absolute -top-12 -end-20 -z-[1] w-48 h-48 bg-gradient-to-t from-purple-500 to-indigo-700 p-px rounded-lg">
                  <div className="bg-white w-48 h-48 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
      </section>
    );
}

export default Hero