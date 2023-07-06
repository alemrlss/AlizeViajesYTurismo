import { Disclosure, Transition } from "@headlessui/react"
import { BiSolidDownArrow } from "react-icons/bi"

export const Questions = () => {

  return (
    <section className="py-10  pb-10">
      <div className="w-full">
        <h2 className="font-bold mb-8">Preguntas Frecuentes</h2>
        <div className="flex">
          <div className="flex-1 mb-3 px-2">

            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center gap-10 mb-10  `${open ? 'border-b-0' : 'border-gray-400'}` pb-5">
                    ¿Cómo encuentro las mejores ofertas de viaje en KAYAK?
                    <BiSolidDownArrow
                      className={`transition-transform duration-100 ${open ? 'rotate-180' : ''
                        }`}
                    />
                  </Disclosure.Button>

                  <Transition
                    show={open}
                    enter="transition-all duration-300 ease-out"
                    enterFrom="opacity-0 max-h-0 mb-0"
                    enterTo="opacity-100 max-h-[400px] mb-4"
                    leave="transition-all duration-300 ease-out"
                    leaveFrom="opacity-100 max-h-[400px] mb-4"
                    leaveTo="opacity-0 max-h-0 mb-0"
                  >
                    <Disclosure.Panel className="border-b border-gray-400 pb-5" static>
                      Solo tienes que usar uno de nuestros motores de búsqueda de viajes para buscar los precios recopilados en cientos de webs de viajes. Las páginas de resultados de búsqueda de KAYAK tienen un montón de opciones de filtro para ayudarte a encontrar el mejor precio, descubrir exactamente lo que buscas y hacer la reserva sin problemas. Tenemos acceso a los datos más recientes, lo que significa que nuestros precios son siempre precisos y están actualizados. Además, KAYAK no cobra ningún cargo adicional.
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>

            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center gap-10 mb-10 border-b border-gray-400 pb-5">
                    ¿Cómo encuentro las mejores ofertas de viaje en KAYAK?
                    <BiSolidDownArrow
                      className={`transition-transform duration-100 ${open ? 'rotate-180' : ''
                        }`}
                    />
                  </Disclosure.Button>

                  <Transition
                    show={open}
                    enter="transition-all duration-300 ease-out"
                    enterFrom="opacity-0 max-h-0 mb-0"
                    enterTo="opacity-100 max-h-[400px] mb-4"
                    leave="transition-all duration-300 ease-out"
                    leaveFrom="opacity-100 max-h-[400px] mb-4"
                    leaveTo="opacity-0 max-h-0 mb-0"
                  >
                    <Disclosure.Panel className="border-b border-gray-400 pb-5" static>
                      Solo tienes que usar uno de nuestros motores de búsqueda de viajes para buscar los precios recopilados en cientos de webs de viajes. Las páginas de resultados de búsqueda de KAYAK tienen un montón de opciones de filtro para ayudarte a encontrar el mejor precio, descubrir exactamente lo que buscas y hacer la reserva sin problemas. Tenemos acceso a los datos más recientes, lo que significa que nuestros precios son siempre precisos y están actualizados. Además, KAYAK no cobra ningún cargo adicional.
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>

            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center gap-10 mb-10 border-b border-gray-400 pb-5">
                    ¿Cómo encuentro las mejores ofertas de viaje en KAYAK?
                    <BiSolidDownArrow
                      className={`transition-transform duration-100 ${open ? 'rotate-180' : ''
                        }`}
                    />
                  </Disclosure.Button>

                  <Transition
                    show={open}
                    enter="transition-all duration-300 ease-out"
                    enterFrom="opacity-0 max-h-0 mb-0"
                    enterTo="opacity-100 max-h-[400px] mb-4"
                    leave="transition-all duration-300 ease-out"
                    leaveFrom="opacity-100 max-h-[400px] mb-4"
                    leaveTo="opacity-0 max-h-0 mb-0"
                  >
                    <Disclosure.Panel className="border-b border-gray-400 pb-5" static>
                      Solo tienes que usar uno de nuestros motores de búsqueda de viajes para buscar los precios recopilados en cientos de webs de viajes. Las páginas de resultados de búsqueda de KAYAK tienen un montón de opciones de filtro para ayudarte a encontrar el mejor precio, descubrir exactamente lo que buscas y hacer la reserva sin problemas. Tenemos acceso a los datos más recientes, lo que significa que nuestros precios son siempre precisos y están actualizados. Además, KAYAK no cobra ningún cargo adicional.
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
          </div>

          <div className="flex-1 ">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center gap-10 mb-10 border-b border-gray-400 pb-5">
                    ¿Cómo encuentro las mejores ofertas de viaje en KAYAK?
                    <BiSolidDownArrow
                      className={`transition-transform duration-100 ${open ? 'rotate-180' : ''
                        }`}
                    />
                  </Disclosure.Button>

                  <Transition
                    show={open}
                    enter="transition-all duration-300 ease-out"
                    enterFrom="opacity-0 max-h-0 mb-0"
                    enterTo="opacity-100 max-h-[400px] mb-4"
                    leave="transition-all duration-300 ease-out"
                    leaveFrom="opacity-100 max-h-[400px] mb-4"
                    leaveTo="opacity-0 max-h-0 mb-0"
                  >
                    <Disclosure.Panel className="border-b border-gray-400 pb-5" static>
                      Solo tienes que usar uno de nuestros motores de búsqueda de viajes para buscar los precios recopilados en cientos de webs de viajes. Las páginas de resultados de búsqueda de KAYAK tienen un montón de opciones de filtro para ayudarte a encontrar el mejor precio, descubrir exactamente lo que buscas y hacer la reserva sin problemas. Tenemos acceso a los datos más recientes, lo que significa que nuestros precios son siempre precisos y están actualizados. Además, KAYAK no cobra ningún cargo adicional.
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>

            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center gap-10 mb-10 border-b border-gray-400 pb-5">
                    ¿Cómo encuentro las mejores ofertas de viaje en KAYAK?
                    <BiSolidDownArrow
                      className={`transition-transform duration-100 ${open ? 'rotate-180' : ''
                        }`}
                    />
                  </Disclosure.Button>

                  <Transition
                    show={open}
                    enter="transition-all duration-300 ease-out"
                    enterFrom="opacity-0 max-h-0 mb-0"
                    enterTo="opacity-100 max-h-[400px] mb-4"
                    leave="transition-all duration-300 ease-out"
                    leaveFrom="opacity-100 max-h-[400px] mb-4"
                    leaveTo="opacity-0 max-h-0 mb-0"
                  >
                    <Disclosure.Panel className="border-b border-gray-400 pb-5" static>
                      Solo tienes que usar uno de nuestros motores de búsqueda de viajes para buscar los precios recopilados en cientos de webs de viajes. Las páginas de resultados de búsqueda de KAYAK tienen un montón de opciones de filtro para ayudarte a encontrar el mejor precio, descubrir exactamente lo que buscas y hacer la reserva sin problemas. Tenemos acceso a los datos más recientes, lo que significa que nuestros precios son siempre precisos y están actualizados. Además, KAYAK no cobra ningún cargo adicional.
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>

            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center gap-10 mb-10 border-b border-gray-400 pb-5">
                    ¿Cómo encuentro las mejores ofertas de viaje en KAYAK?
                    <BiSolidDownArrow
                      className={`transition-transform duration-100 ${open ? 'rotate-180' : ''
                        }`}
                    />
                  </Disclosure.Button>

                  <Transition
                    show={open}
                    enter="transition-all duration-300 ease-out"
                    enterFrom="opacity-0 max-h-0 mb-0"
                    enterTo="opacity-100 max-h-[400px] mb-4"
                    leave="transition-all duration-300 ease-out"
                    leaveFrom="opacity-100 max-h-[400px] mb-4"
                    leaveTo="opacity-0 max-h-0 mb-0"
                  >
                    <Disclosure.Panel className="border-b border-gray-400 pb-5" static>
                      Solo tienes que usar uno de nuestros motores de búsqueda de viajes para buscar los precios recopilados en cientos de webs de viajes. Las páginas de resultados de búsqueda de KAYAK tienen un montón de opciones de filtro para ayudarte a encontrar el mejor precio, descubrir exactamente lo que buscas y hacer la reserva sin problemas. Tenemos acceso a los datos más recientes, lo que significa que nuestros precios son siempre precisos y están actualizados. Además, KAYAK no cobra ningún cargo adicional.
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
          </div>
        </div>
      </div>
    </section >
  )
}