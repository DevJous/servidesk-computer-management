'use client';

import { UserMenu } from '@/components/main-layout-2/UserMenu';
import { Disclosure } from '@headlessui/react';
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

export function HeaderContainer({ user }: Props) {
  return (
    <Disclosure
      as="nav"
      className="border-b border-indigo-300 border-opacity-25 bg-indigo-600 lg:border-none"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
            <div className="relative flex h-16 items-center justify-between lg:border-b lg:border-indigo-400 lg:border-opacity-25">
              <div className="flex items-center px-2 lg:px-0">
                <div className="flex items-center">
                  <Image
                    src={LogoServideskSVG}
                    alt="Logo"
                    className="h-8 w-8"
                  />
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

              {/*<div className="flex lg:hidden">
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md bg-indigo-600 p-2 text-indigo-200 hover:bg-indigo-500 hover:bg-opacity-75 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>*/}

              <UserMenu email={user.email}>
                <button
                  className={classNames(
                    'block px-4 py-2 w-full text-sm text-gray-700',
                  )}
                >
                  Cerrar sesión
                </button>
              </UserMenu>

              {/*<div className="hidden lg:ml-4 lg:block">
                {user && (
                  <div className="flex items-center">
                    <Menu as="div" className="relative ml-3 flex-shrink-0">
                      <div>
                        <MenuButton className="relative flex gap-2.5 items-center rounded-full bg-indigo-600 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600">
                          <span className="absolute -inset-1.5" />
                          <span className="sr-only">Open user menu</span>
                          <p className="hidden sm:inline text-md">
                            {user.email}
                          </p>
                          <UserCircleIcon
                            className="h-8 w-8 fill-white"
                            aria-hidden="true"
                          />
                        </MenuButton>
                      </div>

                      <Transition
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <MenuItem>
                            {({ focus }) => (
                              <button
                                className={classNames(
                                  focus ? 'bg-gray-100' : '',
                                  'block px-4 py-2 w-full text-sm text-gray-700',
                                )}
                              >
                                Cerrar sesión
                              </button>
                            )}
                          </MenuItem>
                        </MenuItems>
                      </Transition>
                    </Menu>
                  </div>
                )}
              </div>*/}
            </div>
          </div>

          {/*<DisclosurePanel className="lg:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-indigo-700 text-white'
                      : 'text-white hover:bg-indigo-500 hover:bg-opacity-75',
                    'block rounded-md px-3 py-2 text-base font-medium',
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>

            {user && (
              <div className="border-t border-indigo-700 pb-3 pt-4">
                <div className="flex items-center px-5">
                  <div className="flex-shrink-0">
                    <UserCircleIcon
                      className="h-10 w-10 fill-white"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-white">
                      {user.email}
                    </div>
                  </div>
                </div>
                <form
                  /*action={async () => {
                    'use server';
                    await signOut();
                  }}
                  className="mt-3 space-y-1 px-2"
                >
                  <DisclosureButton
                    as="button"
                    className="block w-full rounded-md px-3 py-2 text-base font-medium text-white hover:bg-indigo-500 hover:bg-opacity-75"
                  >
                    Cerrar sesión
                  </DisclosureButton>
                </form>
              </div>
            )}
          </DisclosurePanel>*/}
        </>
      )}
    </Disclosure>
  );
}
