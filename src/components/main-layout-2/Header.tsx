import { signOut } from '@/auth';
import { UserMenu } from '@/components/main-layout-2/UserMenu';
import Image from 'next/image';
import React from 'react';
import LogoServideskSVG from '../../../public/logo.svg';

const navigation = [{ name: 'Dashboard', href: '#', current: true }];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

type Props = {
  user: {
    email: string;
  };
};

export function Header({ user }: Props) {
  return (
    <nav className="border-b border-indigo-300 border-opacity-25 bg-indigo-600 lg:border-none">
      <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
        <div className="relative flex h-16 items-center justify-between lg:border-b lg:border-indigo-400 lg:border-opacity-25">
          <div className="flex items-center px-2 lg:px-0">
            <div className="flex items-center">
              <Image src={LogoServideskSVG} alt="Logo" className="h-8 w-8" />
              <p className="text-gray-100 font-semibold text-2xl ml-2">
                Servidesk
              </p>
            </div>

            <div className="hidden lg:ml-10 lg:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-indigo-700 text-white'
                        : 'text-white hover:bg-indigo-500 hover:bg-opacity-75',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <UserMenu email={user.email}>
            <form
              action={async () => {
                'use server';
                await signOut();
              }}
            >
              <button
                className={classNames(
                  'block px-4 py-2 w-full text-sm text-gray-700',
                )}
              >
                Cerrar sesión
              </button>
            </form>
          </UserMenu>
        </div>
      </div>
    </nav>
  );
}
