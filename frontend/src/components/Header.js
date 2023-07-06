import { AiOutlineUser, AiFillHeart } from 'react-icons/ai'
import { useUiContext } from '../context/UiContext'
import { KayakIcon } from './KayakIcon'

export const Header = () => {
  const { setShowLoginModal, showLoginModal } = useUiContext()


  console.log(showLoginModal)

  return (
    <header className='h-[80px]'>
      <div className='fixed bg-white flex flow-column w-full justify-center p-1 h-inherit top-0 z-10 border border-gray-300'>
        <div className="px-4 flex justify-between">
          <div className="flex flex-auto items-center justify-start">
            <div>
              <button className='p-[6px] mr-4 border-none rounded outline-inherit hover:bg-slate-200'>
                <svg viewBox="0 0 200 200" width="20" height="20" xmlns="http://www.w3.org/2000/svg" role="img">
                  <path d="M20 153.333h160v-17.778H20v17.778zm0-44.444h160V91.111H20v17.778zm0-62.222v17.778h160V46.667H20z">
                  </path>
                </svg>
              </button>
            </div>
            <div>
              <KayakIcon />
            </div>
          </div>
          <div className="flex flex-auto items-center justify-end">
            <div>
              <button className='p-2 mr-4 border-none rounded outline-inherit hover:bg-slate-200'>
                <AiFillHeart size={20} />
              </button>
            </div>
            <div onClick={() => setShowLoginModal(true)} className='lg:hidden'>
              <AiOutlineUser size={20} />
            </div>
            <div className='hidden lg:block'>
              <button onClick={() => setShowLoginModal(true)} className='py-2 px-4 border border-slate-900 rounded bg-gradient-to-r from-red-500 to-red-300 hover:bg-slate-200'>
                <div className='flex items-center'>
                  <AiOutlineUser className='mr-2' size={16} />
                  <span>
                    Iniciar sesión
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}