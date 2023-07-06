import { Form } from './Form'
import { NewsLetter } from './NewsLetter'
import { Questions } from './Questions'

export const Main = () => {
    return (
        <div className='p-2'>
            <div className='md:max-w-[640px] lg:max-w-7xl lg:px-6 m-auto '>
                <section className="pt-8">
                    <h2 className="text-3xl font-bold leading-10 text-[#212a30]">
                        Saca tus pasajes desde la comodidad de tu casa.
                    </h2>
                </section>
                <Form />
                <NewsLetter />
                <Questions />
            </div>
        </div >
    )
}
 
