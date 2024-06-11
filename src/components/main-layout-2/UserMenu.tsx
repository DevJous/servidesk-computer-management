'use client';

import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from '@headlessui/react';
import { UserCircleIcon } from '@heroicons/react/20/solid';
import React from 'react';

type Props = {
  email: string;
  children: React.ReactNode;
};

export function UserMenu({ email, children }: Props) {
  return (
    <div className="hidden lg:ml-4 lg:block">
      <div className="flex items-center">
        <Menu as="div" className="relative ml-3 flex-shrink-0">
          <div>
            <MenuButton className="relative flex gap-2.5 items-center rounded-full bg-indigo-600 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600">
              <span className="absolute -inset-1.5" />
              <span className="sr-only">Open user menu</span>
              <p className="hidden sm:inline text-md">{email}</p>
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
                {
                  children
                  /*<button
                    className={classNames(
                      focus ? 'bg-gray-100' : '',
                      'block px-4 py-2 w-full text-sm text-gray-700',
                    )}
                  >
                    Cerrar sesión
                  </button>*/
                }
              </MenuItem>
            </MenuItems>
          </Transition>
        </Menu>
      </div>
    </div>
  );
}
