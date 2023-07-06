import React from 'react'

export const NewsLetter = () => {
  return (
    <div className='border rounded-2xl p-8 md:flex'>
      <img className='w-[200px] h-[140px]' src="/assets/newsletter.svg" alt="newsLetterIcon" />
      <div className='flex flex-col'>
        <div>
          <h3 className='text-xl font-semibold'>Recibi nuestro newsletter.</h3>
          <p>Registrate para recibir recomendaciones personalizadas y ofertas exclusivas.</p>
        </div>

        <div className='md:flex md:items-center'>
          <div className="relative rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="text-gray-500 sm:text-sm">
                <svg viewBox="0 0 200 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" role="img" className='w-5 h-5'>
                  <path d="M122.55 121.086l57.45 45.96c0 1.483 12.404.954-160 .954c0-5.625-8.392 2.29 57.331-47.002c25.048 18.787 23.183 16.617 45.219.088zM20 77.997v66.007l44.003-33.002L20 77.997zM20 32v26.003L100 118l80-59.997V32H20zm160 114.554V77.997l-44.229 33.173L180 146.554z">
                  </path>
                </svg>
              </span>
            </div>
            <input
              type="email"
              name="price"
              id="price"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 indent-2.5"
              placeholder="Escribe tu email"
            />
          </div>
          <button className='bg-gray-300 hover:bg-gray-500 hover:text-white text-gray-600 font-bold py-1.5 px-4 rounded mt-5 w-full md:w-1/4 md:mt-0 md:ms-5'>Alla vamos</button>
        </div>
      </div>
    </div>
  )
}