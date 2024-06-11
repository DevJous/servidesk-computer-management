'use client';

import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from '@headlessui/react';
import { PhotoIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

export default function AddServiceDialog() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
        <button
          onClick={() => setOpen(true)}
          className="block rounded-md bg-purple-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
        >
          Agregar
        </button>
      </div>

      <Transition show={open}>
        <Dialog className="relative z-10" onClose={() => setOpen(false)}>
          <TransitionChild
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </TransitionChild>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="sm:flex sm:items-start">
                    <form>
                      <div className="space-y-12">
                        <div className="border-b border-gray-900/10 pb-12">
                          <h2 className="text-base font-semibold leading-7 text-gray-900">
                            Información personal
                          </h2>
                          <p className="mt-1 text-sm leading-6 text-gray-600">
                            Utilice un correo permanente donde pueda recibir el
                            estado de su servicio.
                          </p>

                          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                              <label
                                htmlFor="first-name"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Nombre
                              </label>
                              <div className="mt-2">
                                <input
                                  type="text"
                                  name="first-name"
                                  id="first-name"
                                  autoComplete="given-name"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                                />
                              </div>
                            </div>

                            <div className="sm:col-span-3">
                              <label
                                htmlFor="last-name"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Apellido
                              </label>
                              <div className="mt-2">
                                <input
                                  type="text"
                                  name="last-name"
                                  id="last-name"
                                  autoComplete="family-name"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                                />
                              </div>
                            </div>

                            <div className="col-span-full">
                              <label
                                htmlFor="email"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Correo electrónico
                              </label>
                              <div className="mt-2">
                                <input
                                  id="email"
                                  name="email"
                                  type="email"
                                  autoComplete="email"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                                />
                              </div>
                            </div>

                            <div className="col-span-full">
                              <label
                                htmlFor="city"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Ciudad
                              </label>
                              <div className="mt-2">
                                <select
                                  id="city"
                                  name="city"
                                  autoComplete="city-name"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1
                                  ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-purple-600
                                  sm:text-sm sm:leading-6"
                                >
                                  <option>Guayaquil</option>
                                  <option>Quito</option>
                                  <option>Cuenca</option>
                                </select>
                              </div>
                            </div>

                            <div className="col-span-full">
                              <label
                                htmlFor="street-address"
                                className="block text-sm font-medium leading-6
                                  text-gray-900"
                              >
                                Dirección
                              </label>
                              <div className="mt-2">
                                <input
                                  type="text"
                                  name="street-address"
                                  id="street-address"
                                  autoComplete="street-address"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1
                                  ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                                  focus:ring-purple-600 sm:text-sm sm:leading-6"
                                />
                              </div>
                            </div>

                            <div className="sm:col-span-3">
                              <label
                                htmlFor="region"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Estado / Provincia
                              </label>
                              <div className="mt-2">
                                <input
                                  type="text"
                                  name="region"
                                  id="region"
                                  autoComplete="address-level1"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1
                                  ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                                  focus:ring-purple-600 sm:text-sm sm:leading-6"
                                />
                              </div>
                            </div>

                            <div className="sm:col-span-3">
                              <label
                                htmlFor="postal-code"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                ZIP / Código postal
                              </label>
                              <div className="mt-2">
                                <input
                                  type="text"
                                  name="postal-code"
                                  id="postal-code"
                                  autoComplete="postal-code"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1
                                  ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                                  focus:ring-purple-600 sm:text-sm sm:leading-6"
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="pb-8">
                          <h2 className="text-base font-semibold leading-7 text-gray-900">
                            Información del servicio
                          </h2>
                          <p className="mt-1 text-sm leading-6 text-gray-600">
                            Esta información se mostrará al trabajador que se le
                            asigne, por lo tanto sea detallado en su problema y
                            el requerimiento que necesita.
                          </p>

                          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="col-span-full">
                              <label
                                htmlFor="about"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Descripción
                              </label>
                              <div className="mt-2">
                                <textarea
                                  id="about"
                                  name="about"
                                  rows={3}
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                                  defaultValue={''}
                                />
                              </div>
                              <p className="mt-3 text-sm leading-6 text-gray-600">
                                Descripción detallada del problema.
                              </p>
                            </div>

                            <div className="col-span-full">
                              <label
                                htmlFor="cover-photo"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Foto del problema
                              </label>
                              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                <div className="text-center">
                                  <PhotoIcon
                                    className="mx-auto h-12 w-12 text-gray-300"
                                    aria-hidden="true"
                                  />
                                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                    <label
                                      htmlFor="file-upload"
                                      className="relative cursor-pointer rounded-md bg-white font-semibold text-purple-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-purple-600 focus-within:ring-offset-2 hover:text-purple-500"
                                    >
                                      <span>Subir archivo</span>
                                      <input
                                        id="file-upload"
                                        name="file-upload"
                                        type="file"
                                        className="sr-only"
                                      />
                                    </label>
                                    <p className="pl-1">o arrastre y suelte</p>
                                  </div>
                                  <p className="text-xs leading-5 text-gray-600">
                                    PNG, JPG, GIF hasta 10MB
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                        <button
                          type="button"
                          className="inline-flex w-full justify-center rounded-md bg-purple-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 sm:ml-3 sm:w-auto"
                          onClick={() => setOpen(false)}
                        >
                          Guardar
                        </button>
                        <button
                          type="button"
                          className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                          onClick={() => setOpen(false)}
                          data-autofocus
                        >
                          Cancelar
                        </button>
                      </div>
                    </form>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
