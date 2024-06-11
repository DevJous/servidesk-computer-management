'use client';

import { SignIn } from '@/lib/auth-action';
import { loginSchema } from '@/lib/validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { redirect } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

type FormData = z.infer<typeof loginSchema>;

export default function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(loginSchema),
  });

  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);

    await SignIn({
      email: data.email,
      password: data.password,
    })
      .then(() => {
        redirect('/dashboard');
      })
      .catch((error) => {
        setIsLoading(false);
      });
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
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
            type="email"
            autoComplete="email"
            autoCapitalize="none"
            autoCorrect="off"
            disabled={isLoading}
            {...register('email')}
            className="block w-full bg-slate-900 bg-opacity-70 rounded-md border-0 py-1.5 text-gray-100 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
          />
          {errors?.email && (
            <p className="text-xs text-red-400 mt-1">{errors.email.message}</p>
          )}
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
            type="password"
            autoComplete="current-password"
            {...register('password')}
            className="block w-full rounded-md bg-slate-900 bg-opacity-70 border-0 py-1.5 text-gray-100 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
          />
          {errors?.password && (
            <p className="text-xs text-red-400 mt-1">
              {errors.password.message}
            </p>
          )}
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
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          disabled={isLoading}
        >
          {isLoading ? 'Cargando...' : 'Iniciar sesión'}
        </button>
      </div>
    </form>
  );
}
