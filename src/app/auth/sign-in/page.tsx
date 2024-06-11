import SignInForm from '@/components/SignInForm';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '../../../../public/logo.png';

export default function SignInPage() {
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
              Iniciar sesión
            </h2>
          </div>

          {/*<form
            className="space-y-6"
            action={async (formData) => {
              'use server';
              await signIn('credentials', formData);
            }}
            method="POST"
          >
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

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-3 block text-sm leading-6 text-gray-100"
                >
                  Recordarme
                </label>
              </div>

              <div className="text-sm leading-6">
                <a
                  href="#"
                  className="font-semibold text-cyan-500 hover:text-cyan-400"
                >
                  ¿Has olvidado tu contraseña?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-violet-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg-violet-600"
              >
                Iniciar sesión
              </button>
            </div>
          </form>*/}

          <SignInForm />

          <p className="mt-10 text-center text-sm text-gray-500">
            ¿No tienes cuenta?{' '}
            <Link
              href="/auth/register"
              className="font-semibold leading-6 text-cyan-500 hover:text-cyan-400"
            >
              Registrarse
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
