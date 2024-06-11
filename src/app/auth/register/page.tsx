import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../../public/logo.png';

export default function RegisterPage() {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
        <div className="bg-slate-800 bg-opacity-70 px-6 py-12 shadow sm:rounded-2xl sm:px-12">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <Image
              className="mx-auto h-10 w-auto bg-white rounded-lg"
              src={logo}
              alt="Logo"
            />
            <h2 className="my-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-100">
              Registro
            </h2>
          </div>

          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-100"
              >
                Nombre
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="block w-full bg-slate-900 bg-opacity-70 rounded-md border-0 py-1.5 text-gray-100 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-100"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full bg-slate-900 bg-opacity-70 rounded-md border-0 py-1.5 text-gray-100 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-100"
              >
                Contraseña
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md bg-slate-900 bg-opacity-70 border-0 py-1.5 text-gray-100 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-violet-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg-violet-600"
              >
                Crear cuenta
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            ¿Ya tienes una cuenta?{' '}
            <Link
              href="/auth/sign-in"
              className="font-semibold leading-6 text-cyan-500 hover:text-cyan-400"
            >
              Inicia sesión
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
