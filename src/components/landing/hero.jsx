import { Fade } from "react-awesome-reveal";


function Hero() {
    return(
      <Fade cascade damping={1e-1} direction='up' triggerOnce={true}>
          <section>
          <div className="relative overflow-hidden">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10">
              <div className="max-w-2xl mx-auto text-center">
                <h1 className="text-4xl font-bold text-gray-800 sm:text-4xl md:text-6xl">Organize e melhore sua produtividade</h1>
                <p className="mt-6 mb-6 text-lg text-gray-600">Simples e flexível. Bastam quadros, listas e cartões para obter uma visualização clara de quem está fazendo o que e o que precisa ser feito.</p>

                
                <a className="inline-flex items-center px-4 py-3 mr-2 text-sm font-semibold text-white duration-300 ease-out rounded-full gap-x-2 bg-gradient-to-r from-purple-500 to-indigo-700 hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/50 ">Comece agora</a>

                <a className="inline-flex items-center px-4 py-3 mb-6 text-sm font-semibold text-gray-800 duration-300 border border-gray-800 rounded-full gap-x-2 hover:border-gray-500 hover:text-gray-500 hover:scale-105" href="#prices">Ver preços </a>
              </div>

              <div className="relative max-w-5xl mx-auto mt-10">
                <div className="w-full object-cover h-96 sm:h-[480px] bg-[url('https://www.icolorpalette.com/download/solidcolorimage/000000_solid_color_background_icolorpalette.png')] bg-no-repeat bg-center bg-cover rounded-xl"></div>

                <div className="absolute bottom-24 -start-24 blur-3xl -z-[1] w-64 h-64 bg-gradient-to-b from-purple-500 to-indigo-700 p-px rounded-full">
                  <div className="w-64 h-64 rounded-full "></div>
                </div>

                <div className="absolute -top-12 -end-20 blur-3xl -z-[1] w-96 h-96 bg-gradient-to-t from-purple-500 to-indigo-700 p-px rounded-full">
                  <div className="rounded-full w-96 h-96"></div>
                </div>
              </div>

            </div>

          </div>
          </section>
      </Fade>

    );
}

export default Hero