import Header from "../landing/header"

function Signup() {
    return(
<section>
  <div className="flex items-center justify-center h-screen">
    <div className="w-full h-full p-24 xl:p-52 lg:px-30 md:px-32 sm:px-20 max-sm:p-14 lg:w-1/2">
    <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl md:text-4xl">Signup</h1>
      <p className="mb-4 text-gray-400 text-md">Cadastra-se com um email e senha</p>
      
      <hr className="h-px my-5 bg-gray-200 border-0" />


      <form action="#" method="POST">
      <div className="mb-4">
          <label className="block mb-2 text-gray-600">
            Nome
          </label>
          <input
            placeholder="Digite seu nome"
            type="text"
            className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600"
            autoComplete="on"
          />
        </div>
        
        <div className="mb-4">
          <label className="block mb-2 text-gray-600">
            Email
          </label>
          <input
            placeholder="email@exemple.com"
            type="text"
            className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600"
            autoComplete="on"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-gray-600">
            Senha
          </label>
          <input  
            placeholder="Min 8 caracteres"
            type="password"
            className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600"
            autoComplete="on"
          />
        </div>
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="remember"
            name="remember"
            className="text-blue-500"
          />
          <label className="ml-2 text-gray-600">
            Manter logado
          </label>
        </div>
        <div className="mb-6 text-blue-500">
          <a href="#" className="text-indigo-700 hover:underline">
            Esqueci minha senha
          </a>
        </div>
        <button
          type="submit"
          className="w-full px-5 py-2.5 font-semibold text-center text-white duration-300 ease-out rounded-lg bg-indigo-600 hover:shadow-md hover:bg-indigo-700 hover:shadow-indigo-500/50"
        >
          Cadastrar
        </button>
      </form>
      
    </div>

    
    <div className="hidden w-1/2 h-screen lg:block">
      <img
        src="https://i.ibb.co/b1Vpq7f/Background-5-4.png"
        className="object-cover w-full h-full rounded-bl-[128px]"
        alt="Background Image"
      />
    </div>
  </div>
</section>

    )
}

export default Signup