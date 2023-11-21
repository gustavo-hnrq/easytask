function Login() {
    return(
<section>
  <div className="flex justify-center items-center h-screen">
    <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
      <h1 className="text-2xl font-semibold mb-4">Login</h1>
      <form action="#" method="POST">
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-600">
            Email
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            autoComplete="on"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-600">
            Senha
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            autoComplete="on"
          />
        </div>
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            id="remember"
            name="remember"
            className="text-blue-500"
          />
          <label htmlFor="remember" className="text-gray-600 ml-2">
            Manter logado
          </label>
        </div>
        <div className="mb-6 text-blue-500">
          <a href="#" className="hover:underline">
            Esqueci minha senha
          </a>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
        >
          Login
        </button>
      </form>
      
    </div>
    <div className="w-1/2 h-screen hidden lg:block">
      <img
        src="https://i.ibb.co/b1Vpq7f/Background-5-4.png"
        className="object-cover w-full h-full rounded-bl-[128px] drop-shadow-sm	"
        alt="Background Image"
      />
    </div>
  </div>
</section>

    )
}

export default Login