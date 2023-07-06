import React from 'react'

export const Input = () => {
  return (
    <div className="border w-fit rounded">
      <div className="flex items-center">
        <div className="p-4 mr-2">
          <span>
            <svg className='w-6 h-6' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" role="img">
              <path d="M178.081 41.973c-2.681 2.663-16.065 17.416-28.956 30.221c0 107.916 3.558 99.815-14.555 117.807l-14.358-60.402l-14.67-14.572c-38.873 38.606-33.015 8.711-33.015 45.669c.037 8.071-3.373 13.38-8.263 18.237L50.66 148.39l-30.751-13.513c10.094-10.017 15.609-8.207 39.488-8.207c8.127-16.666 18.173-23.81 26.033-31.62L70.79 80.509L10 66.269c17.153-17.039 6.638-13.895 118.396-13.895c12.96-12.873 26.882-27.703 29.574-30.377c7.745-7.692 28.017-14.357 31.205-11.191c3.187 3.166-3.349 23.474-11.094 31.167zm-13.674 42.469l-8.099 8.027v23.58c17.508-17.55 21.963-17.767 8.099-31.607zm-48.125-47.923c-13.678-13.652-12.642-10.828-32.152 8.57h23.625l8.527-8.57z">
              </path>
            </svg>
          </span>
        </div>
        <input type="text" value="" className="border-0 pr-4 pl-2" placeholder="Destino" />
      </div>
    </div>
  )
}
