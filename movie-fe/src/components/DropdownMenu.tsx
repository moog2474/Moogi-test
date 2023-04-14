import React from 'react'
import { Menu, Transition } from '@headlessui/react'
import { useState, Fragment } from 'react'
import { useRouter } from 'next/router'
import { ChevronDownIcon } from "@heroicons/react/20/solid";

interface dropdonwProps{
    list: {id: number, text: string, _id?: string, count?: number}[];
    menuText: string;
}

export const DropdownMenu = ({list, menuText}: dropdonwProps): JSX.Element => {
  
  const router = useRouter();
  const [doneResGenres, setDoneResGenres ] = useState<>([]);
  const [doneResRate, setDoneResRate ] = useState([]);

  const filterByType = (menuText: string) =>{
    router.push(`/movie?${menuText}=${doneResGenres.join(",")}`);
  }
    return (
        <Menu as="div" className="relative inline-block mx-1">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-full bg-white border px-4 py-2 text-sm font-medium text-black hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            {menuText}
            <ChevronDownIcon
              className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
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
          <Menu.Items className="absolute mt-2 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 overflow-auto h-60 w-48">
              {list && (
                <>
                  {list?.map((item, index) => (
                    <Menu.Item>
                      {({ active }) => (
                        <div
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                          className={`${
                            active ? "bg-gray-200 text-white" : "text-gray-900"
                          } group flex w-full rounded-md px-2 py-2 text-sm`}
                        >
                          {item.text}
                          {item._id && (
                            <>
                              <div className="uppercase flex flex-row justify-between w-full">
                                <label htmlFor={item._id}>{item._id}</label>
                                <input
                                  type="checkbox"
                                  name={item._id}
                                  checked={
                                    menuText == "Genre"
                                      ? doneResGenres.includes(item._id)
                                      : doneResRate.includes(item._id)
                                  }
                                  onChange={(e) => {
                                    const { name } = e.currentTarget;
  
                                    if (menuText == "Genre") {
                                      setDoneResGenres([
                                        ...doneResGenres,
                                        name,
                                      ]);
                                    } else {
                                      setDoneResRate([
                                        ...doneResRate,
                                        name,
                                      ]);
                                    }
                                  }}
                                />
                              </div>
                            </>
                          )}
                        </div>
                      )}
                    </Menu.Item>
                  ))}
  
                  <div className="flex w-full justify-between py-1 px-1">
                    <button
                      className="bg-gray-600 rounded px-2 text-white"
                      onClick={() => {
                        setDoneResGenres([]);
                        setDoneResRate([]);
                      }}
                    >
                      Reset
                    </button>
                    <button
                      className="bg-blue-600 rounded px-2 text-white"
                      onClick={() => filterByType(menuText)}
                    >
                      Apply
                    </button>
                  </div>
                </>
              )}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
  )
}
