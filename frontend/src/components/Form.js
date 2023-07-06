import { AiOutlineSearch } from 'react-icons/ai'
import { BsFillBusFrontFill, } from 'react-icons/bs'
import Datepicker from "react-tailwindcss-datepicker";
import { BiChevronDown } from 'react-icons/bi'
import { Menu, Transition, Listbox } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { SelectDestination } from './SelectDestination';
import axios from 'axios';

export const Form = () => {
  const [date, setDate] = useState({
    startDate: null,
    endDate: null
  });

  const [origen, setOrigen] = useState({})
  const [destino, setDestino] = useState({})

  const handleValueChange = (newValue) => {
    setDate(newValue);
  }

  const onSubmit = () => {
    const headers = {
      'authority': 'www.plataforma10.com.ar',
      'accept': 'application/json, text/plain, */*',
      'accept-language': 'en-US,en;q=0.9,es-US;q=0.8,es;q=0.7',
    };

    axios.get('https://www.plataforma10.com.ar/ApiBusesBusqueda/Buscar?IdPv=5720&IdPais=2&pais=ar&Adultos=2&Menores=0&Infantes=0&Lang=es-AR&IdPadOrigen=1471&IdPadDestino=369&FechaIda=04-07-2023&FechaVuelta=21-07-2023', {
      headers
    })
      .then(({ data }) => console.log(data))
      .catch((err) => console.log(err));
  }

  return (
    <section className="pt-8">
      <div className='flex'>
        <div className="flex flex-wrap gap-2 mb-4">
          <Select />
          {/* <DropDownMenu title='Solo Ida' items={[{ name: 'Solo ida' }, { name: 'Ida y vuelta' }]} /> */}
          <DropDownMenu title='Adultos' items={[{ name: 'Adultos 18+' }, { name: 'Joven' }, { name: 'Niños' }]} />
        </div>
      </div>

      <section className="pt-8 mb-10 flex flex-col gap-2 lg:flex-row">
        <SelectDestination onSelected={setOrigen} selected={origen} placerholder='Origen' />
        <SelectDestination onSelected={setDestino} selected={destino} placerholder='Destion' />
        <Datepicker
          containerClassName="relative"
          inputClassName='p-2 h-full w-full rounded flex gap-2 items-center bg-slate-300'
          toggleClassName="absolute top-0 text-gray right-0 h-full px-3 text-gray-400 focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed"
          placeholder={"dd/mm/aa"}
          onChange={handleValueChange}
          value={date}
          useRange={false}
          asSingle={true}
          displayFormat={"DD/MM/YYYY"}
        />
        <div className='flex'>
          <button onClick={() => onSubmit()} className=' px-4  w-full p-2 rounded  flex gap-2 items-center justify-center bg-gradient-to-r from-red-500 to-red-300'>
            <AiOutlineSearch className='' />
          </button>
        </div>
      </section>
      {/* dayjs */}


      <section ></section>
    </section>
  )
}

const DropDownMenu = ({ title, items = [] }) => {
  return (
    <Menu as="div" className="mr-4 text-left">
      <div>
        <Menu.Button className="flex items-center gap-2">
          {title}
          <BiChevronDown />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute mt-2 w-60 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="p-6">
            {items.map((item, i) => (
              <Menu.Item key={i}>
                <div className="flex items-center justify-between m-w-[250px] leading-10">
                  <label class="flex-1 flex-nowrap">
                    <span className='text-sm'>{item.name}</span>
                    {/* <span class="pr-6 pl-1">1</span> */}
                  </label>
                  <div className="flex items-center">
                    <button className="flex justify-center flex-column items-center border border-slate-700 w-[20px] h-[20px] text-center rounded" tabindex="-1" aria-label="Menos" aria-disabled="true">
                      <svg viewBox="0 0 200 200" width="10" height="10" xmlns="http://www.w3.org/2000/svg" role="img">
                        <path d="M30 92.5h140v15H30z">
                        </path>
                      </svg>
                    </button>
                    <input className="w-[30px] text-center" tabindex="0" role="spinbutton" aria-valuenow="1" aria-valuemin="1" aria-valuemax="9" aria-label="adultos" value="1" />
                    <button className="flex justify-center flex-column items-center border border-slate-700 w-[20px] h-[20px] text-center rounded" tabindex="-1" aria-label="Menos" aria-disabled="false">
                      <svg viewBox="0 0 200 200" width="10" height="10" xmlns="http://www.w3.org/2000/svg" role="img">
                        <path d="M107.5 92.5V30h-15v62.5H30v15h62.5V170h15v-62.5H170v-15z">
                        </path>
                      </svg>
                    </button>
                  </div>
                </div>
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

const people = [
  { id: 1, name: 'Solo ida', unavailable: false },
  { id: 2, name: 'Ida y vuelta', unavailable: false },
]

const Select = () => {
  const [selected, setSelected] = useState(people[0])

  return (
    <div className="mr-4">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative">
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="flex items-center gap-2">
              {selected.name}
              <BiChevronDown />
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-30 w-30 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {people.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-4 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                          }`}
                      >
                        {person.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          {/* <CheckIcon className="h-5 w-5" aria-hidden="true" /> */}
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}