import useLogin from "./hook";

const Login = () => {
  const [user, pass, handleSubmitLogin] = useLogin();

  return (
    <div className="relative w-full flex justify-center">
      <form
        onSubmit={handleSubmitLogin}
        className="relative w-[330px] px-5 py-10 bg-white mx-8 md:mx-0 shadow-xl/30 rounded-3xl sm:p-10"
      >
        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b  md:w-1/4"></span>
          <p className="text-xs text-gray-500 uppercase" href="#">
            Administrador
          </p>
          <span className="w-1/5 border-b md:w-1/4"></span>
        </div>
        <div className="max-w-md mx-auto">
          <div className="mt-5">
            <label
              className="font-semibold text-sm text-gray-600 pb-1 block"
              htmlFor="User"
            >
              Email
            </label>
            <input
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              type="email"
              id="User"
              ref={user}
              required
            />
            <label
              className="font-semibold text-sm text-gray-600 pb-1 block"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              type="password"
              id="password"
              ref={pass}
              required
            />
          </div>
          <div className="mt-5">
            <button
              className="py-2 px-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
              type="submit"
            >
              Log in
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
