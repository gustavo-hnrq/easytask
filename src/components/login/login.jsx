function Login() {
    return(
<section>
  <div className="flex items-center justify-center h-screen">
    <div className="w-full p-8 xl:px-60 lg:p-32 md:p-32 sm:p-32 lg:w-1/2">
    <h1 className="my-5 text-2xl font-bold text-gray-800 sm:text-3xl md:text-4xl">Login</h1>
      <p className="mb-4 text-gray-400 text-md">Entre com seu email e senha</p>
      
      <hr className="h-px my-5 bg-gray-200 border-0" />


      <form action="#" method="POST">
        <div className="mb-4">
          <label className="block mb-2 text-gray-600">
            Email
          </label>
          <input
            placeholder="email@exemplo.com"
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

        
        <button
          type="submit"
          className="w-full px-5 py-2.5 font-semibold text-center text-white duration-300 ease-out rounded-lg bg-indigo-600 hover:shadow-md hover:bg-indigo-700 hover:shadow-indigo-500/50"
        >
          Login
        </button>
      </form>

      <div className="mt-4 text-left ">
        <a href="#" className="">Não registrado?<span className="text-indigo-700 transition-all hover:underline"> Crie sua conta</span></a>
      </div>
      
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

export default Login