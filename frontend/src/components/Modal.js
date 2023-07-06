import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useContext, useState } from 'react'
import { useForm } from 'react-hook-form'

import { AuthContext } from '../context/AuthContext'
import { useUiContext } from '../context/UiContext'
import { AiOutlineClose } from 'react-icons/ai'

export const Modal = () => {
  const [login, setLogin] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm()
  const { startRegisterWhitEmailandPassword, loading, authError, } = useContext(AuthContext)
  const { setShowLoginModal, showLoginModal } = useUiContext()

  const onSubmit = async (values) => {
    startRegisterWhitEmailandPassword(values)
  }

  return (
    <Transition appear show={showLoginModal} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => setShowLoginModal(false)}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-red-400 mb-8"
                >
                  <div className='flex justify-between'>
                  alize
                  <AiOutlineClose className='cursor-pointer text-red-500 hover:text-red-200'/>
                  </div>
                </Dialog.Title>
                <div className=''>
                  <div className='mb-8'>
                    <img className='' src="https://content.r9cdn.net/res/images/horizon/ui/authentication/magiclinkloginBg.svg?v=51b1eb86dc2a73bb4297a6bc9c86bc82c2158f04&cluster=4" alt="" />
                  </div>
                  <div>
                    <h3 className='mb-1 text-xl font-semibold'>Iniciar sesion o crear una cuenta</h3>
                    <p className='text-sm pb-2'>Segui precios, organiza tus planes de viaje y accede a ofertas exclusivas para miembros con tu cuenta alize</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      {login ? (
                        <>
                          <input
                            type="text"
                            name="username"
                            className="block w-full rounded-md border-none outline-none py-1 pl-1 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 indent-2.5 mb-0.5"
                            placeholder="Escribe tu nombre"
                            {...register('username', { required: true })}
                          />
                          {errors.username && (
                            <p className='text-red-500 mb-1'>Inserte un nombre de usuario</p>
                          )}
                          <input
                            type="email"
                            name="email"
                            className="block w-full rounded-md border-none outline-none py-1 pl-1 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 indent-2.5  mb-0.5"
                            placeholder="Escribe tu email"
                            {...register('email', { required: true })}
                          />
                          {errors.email && (
                            <p className='text-red-500 mb-1'>Inserte un correo valido</p>
                          )}
                          <input
                            type="password"
                            name="password"
                            className="block w-full rounded-md border-none outline-none py-1 pl-1 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 indent-2.5  mb-0.5"
                            placeholder="Escribe tu contraseña"
                            {...register('password', { required: true })}
                          />
                          {errors.password && (
                            <p className='text-red-500 mb-1'>Inserte una contraseña</p>
                          )}
                        </>
                      ) : (
                        <>
                          <input
                            type="email"
                            name="email"
                            className="block w-full rounded-md border-none outline-none py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 indent-2.5  mb-2"
                            placeholder="Escribe tu email"
                            {...register('email', { required: true })}
                          />
                          {errors.email && (
                            <p className='text-red-500'>Inserte un correo valido</p>
                          )}
                          <input
                            type="password"
                            name="password"
                            className="block w-full rounded-md border-none outline-none py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 indent-2.5  mb-2"
                            placeholder="Escribe tu email"
                            {...register('password', { required: true })}
                          />
                          {errors.password && (
                            <p className='text-red-500 pb-2'>Inserte una contraseña incorrecta</p>
                          )}
                        </>
                      )}
                      <button type="submit" className='py-2 px-4 border ring-gray-300 text-gray-900 rounded w-full bg-gradient-to-r from-red-500 to-red-300 text-white'> {loading ? 'Cargando...' : 'Registrarse'}</button>
                    </form>
                    <div className='mt-2 '>
                      <span>{login ? '¿Ya estas registrado?' : '¿No tienes cuenta?'}</span>
                      {' '}
                      <a className='text-' onClick={() => setLogin(!login)} href="*#"> {login ? 'Iniciar Sesion' : 'Registrarse'} </a>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
