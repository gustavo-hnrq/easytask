import { Link } from "react-router-dom";


function Prices () {
    return(

    <section>
    <div className="py-8 px-4 mx-auto max-w-[85rem] lg:py-16 lg:px-6">
        <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12" id="prices">
            <h2 className="mb-3 text-xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-700">NOSSOS PREÇOS</h2>
            <h1 className="mb-8 text-4xl font-bold text-center text-gray-800 sm:text-4xl md:text-5xl">Pronto para começar?</h1>
            <p className="mb-10 text-lg text-center text-gray-600">Descubra a liberdade de gerenciar seus projetos de maneira eficiente com nossos planos flexíveis. Oferecemos opções para todos os tipos de equipes.</p>
        </div>

        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">

            {/* CARD PREÇO PLANO GRATUITO */}
            <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 duration-300 ease-in-out border border-gray-200 rounded-lg shadow hover:scale-105 hover:shadow-lg hover:border-indigo-700 hover:shadow-indigo-500/50">
                <div className="flex gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path d="M25.0666 13.2134C23.56 13.2134 22.2133 13.9467 21.3733 15.0667C20.5333 13.9467 19.1867 13.2134 17.68 13.2134C15.1333 13.2134 13.0667 15.2934 13.0667 17.8534C13.0667 18.84 13.2266 19.76 13.4933 20.6C14.8 24.7467 18.8533 27.24 20.8533 27.92C21.1333 28.0134 21.6 28.0134 21.88 27.92C23.88 27.24 27.9333 24.76 29.24 20.6C29.52 19.7467 29.6667 18.84 29.6667 17.8534C29.68 15.2934 27.6133 13.2134 25.0666 13.2134Z" fill="#4318FF"/>
                        <path d="M27.6667 11.12C27.6667 11.4266 27.36 11.6266 27.0667 11.5466C25.2667 11.08 23.2934 11.4666 21.8 12.5333C21.5067 12.7466 21.1067 12.7466 20.8267 12.5333C19.7734 11.76 18.4934 11.3333 17.1467 11.3333C13.7067 11.3333 10.9067 14.1466 10.9067 17.6133C10.9067 21.3733 12.7067 24.1866 14.52 26.0666C14.6134 26.16 14.5334 26.32 14.4134 26.2666C10.7734 25.0266 2.66669 19.88 2.66669 11.12C2.66669 7.2533 5.77335 4.1333 9.61335 4.1333C11.8934 4.1333 13.9067 5.22663 15.1734 6.91997C16.4534 5.22663 18.4667 4.1333 20.7334 4.1333C24.56 4.1333 27.6667 7.2533 27.6667 11.12Z" fill="#4318FF"/>
                    </svg>
                    <h3 className="flex mb-4 text-2xl font-bold">Gratuito</h3>

                </div>
                <p className="leading-loose text-gray-600 sm:text-lg ">Melhor opção para projetos pessoais ou pequenos.</p>
                <div className="flex items-baseline justify-center my-8">
                    <span className="mr-2 text-5xl font-extrabold">R$0</span>
                    <span className="text-gray-500">/mensal</span>
                </div>
                <ul role="list" className="mb-8 space-y-4 text-left">
                    <li className="flex items-center space-x-3">
                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <span>Número limitado de usuários</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <span>Quadros e listas limitados</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <span>Tamanho do time: <span className="font-semibold">2 pessoas</span></span>
                    </li>
                    <li className="flex items-center space-x-3">
                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <span>Suporte premium: <span className="font-semibold">1 mês</span></span>
                    </li>
                    <li className="flex items-center space-x-3">
                        <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <span>Updates gratuitos: <span className="font-semibold">1 mês</span></span>
                    </li>
                </ul>
                <div className="w-full">
                    <Link to='signUp'>
                        <button className=" w-full text-white font-semibold px-5 py-2.5 text-center bg-gradient-to-r from-purple-500 to-indigo-700 hover:shadow-md rounded-md hover:shadow-indigo-500/50 duration-300 ease-out">Comece agora</button>
                    </Link>
                </div>
            </div>

            {/* CARD PREÇO PLANO PRO */}
            <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 duration-300 ease-in-out bg-white border border-gray-200 rounded-lg shadow scale-105 hover:scale-110 transition-all hover:shadow-lg hover:border-indigo-700 hover:shadow-indigo-500/50">
                <div className="flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                    <path d="M30.1334 7.61333V20.3867C30.1334 24.0667 27.1467 27.0533 23.4667 27.0533H10.1334C9.52006 27.0533 8.93339 26.9733 8.36006 26.8133C7.53339 26.5867 7.26673 25.5333 7.88006 24.92L22.0534 10.7467C22.3467 10.4533 22.7867 10.3867 23.2001 10.4667C23.6267 10.5467 24.0934 10.4267 24.4267 10.1067L27.8534 6.66666C29.1067 5.41333 30.1334 5.82666 30.1334 7.61333Z" fill="#4318FF"/>
                    <path d="M20.32 9.81336L6.36001 23.7734C5.72001 24.4134 4.65334 24.2534 4.22667 23.4534C3.73334 22.5467 3.46667 21.4934 3.46667 20.3867V7.61336C3.46667 5.82669 4.49334 5.41336 5.74667 6.66669L9.18667 10.12C9.70667 10.6267 10.56 10.6267 11.08 10.12L15.8533 5.33336C16.3733 4.81336 17.2267 4.81336 17.7467 5.33336L20.3333 7.92003C20.84 8.44003 20.84 9.29336 20.32 9.81336Z" fill="#4318FF"/>
                </svg>
                <h3 className="flex mb-4 text-2xl font-bold">Pro</h3>

                </div>
                <p className="leading-loose text-gray-600 sm:text-lg">Relevante para vários usuários, suporte estendido e premium.</p>
                <div className="flex items-baseline justify-center my-8">
                    <span className="mr-2 text-5xl font-extrabold">R$50</span>
                    <span className="text-gray-500">/mensal</span>
                </div>
                <ul role="list" className="mb-8 space-y-4 text-left">
                    <li className="flex items-center space-x-3">
                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <span>Número limitado de usuários</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <span>Quadros e listas ilimitados</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <span>Tamanho do time: <span className="font-semibold">10 pessoas</span></span>
                    </li>
                    <li className="flex items-center space-x-3">
                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <span>Suporte premium: <span className="font-semibold">12 meses</span></span>
                    </li>
                    <li className="flex items-center space-x-3">
                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <span>Updates gratuitos: <span className="font-semibold">12 meses</span></span>
                    </li>
                </ul>
                <div className="w-full">
                    <Link to='signUp'>
                        <button className=" w-full text-white font-semibold px-5 py-2.5 text-center bg-gradient-to-r from-purple-500 to-indigo-700 hover:shadow-md rounded-md hover:shadow-indigo-500/50 duration-300 ease-out">Comece agora</button>
                    </Link>
                </div>     
             </div>

            {/* CARD PREÇO PLANO ULTIMATE */}
            <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 duration-300 ease-in-out border border-gray-200 rounded-lg shadow hover:scale-105 hover:shadow-lg hover:border-indigo-700 hover:shadow-indigo-500/50">
            <div className="flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                    <path d="M24.4801 14.2934H20.3601V4.69336C20.3601 2.45336 19.1468 2.00003 17.6668 3.68003L16.6001 4.89336L7.57345 15.16C6.33345 16.56 6.85345 17.7067 8.72011 17.7067H12.8401V27.3067C12.8401 29.5467 14.0534 30 15.5334 28.32L16.6001 27.1067L25.6268 16.84C26.8668 15.44 26.3468 14.2934 24.4801 14.2934Z" fill="#4318FF"/>
                </svg>
                <h3 className="flex mb-4 text-2xl font-bold">Ultimate</h3>

                </div>
                <p className="leading-loose text-gray-600 sm:text-lg">Melhor para usos em larga escala e direitos de redistribuição estendidos.</p>
                <div className="flex items-baseline justify-center my-8">
                    <span className="mr-2 text-5xl font-extrabold">R$250</span>
                    <span className="text-gray-500">/mensal</span>
                </div>
                <ul role="list" className="mb-8 space-y-4 text-left">
                    <li className="flex items-center space-x-3">
                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <span>Quadros e listas ilimitados</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <span>Relatórios avançados</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <span>Tamanho do time: <span className="font-semibold">100 pessoas</span></span>
                    </li>
                    <li className="flex items-center space-x-3">
                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <span>Suporte premium: <span className="font-semibold">36 meses</span></span>
                    </li>
                    <li className="flex items-center space-x-3">
                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <span>Updates gratuitos: <span className="font-semibold">36 meses</span></span>
                    </li>
                </ul>
                <div className="w-full">
                    <Link to='signUp'>
                        <button className=" w-full text-white font-semibold px-5 py-2.5 text-center bg-gradient-to-r from-purple-500 to-indigo-700 hover:shadow-md rounded-md hover:shadow-indigo-500/50 duration-300 ease-out">Comece agora</button>
                    </Link>
                </div>
             </div>
        </div>
    </div>
    </section>
    )
}

export default Prices