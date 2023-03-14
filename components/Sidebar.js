import Link from 'next/link';
import React, { useContext } from 'react';
import { RxSketchLogo, RxDashboard, RxPerson } from 'react-icons/rx';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { FiSettings } from 'react-icons/fi';
import { DataContext } from '@/pages/_app';
import NewEmployeeForm from './NewEmployeeForm';

const Sidebar = ({ children }) => {

    const { shift, shiftSelect } = useContext(DataContext);

    return (
        <div className='flex'>
            <div className='fixed w-20 p-4 h-screen bg-orange-900 border-r-2 flex flex-col gap-4'>
                <div className='flex flex-col items-center text-center pb-4'>
                    <select value={shift} onChange={shiftSelect} className='border rounded-lg p-2 w-[65px] h-[45px] flex justify-center items-center text-sm'>
                        <option value='1st'>1st</option>
                        <option value='2cnd'>2cnd</option>
                        <option value='3rd'>3rd</option>
                    </select>
                </div>
                <div className='flex flex-col items-center'>
                    <Link href='/'>
                        <div className='bg-purple-800 text-white p-3 rounded-lg inline-block'>
                            <RxDashboard size={20} />
                        </div>
                    </Link>
                    <span className='border-b-2 border-orange-800 w-full p-2'></span>
                </div>
                <div className='flex flex-col items-center'>
                    <Link href='/employees'>
                        <div className='bg-purple-800 text-white p-3 rounded-lg inline-block'>
                            <RxPerson size={20} />
                        </div>
                    </Link>
                    <span className='border-b-2 border-orange-800 w-full p-2'></span>
                </div>
                <div className='flex flex-col items-center'>
                    <Link href='/orders'>
                        <div className='bg-purple-800 text-white p-3 rounded-lg inline-block'>
                            <HiOutlineShoppingBag size={20} />
                        </div>
                    </Link>
                    <span className='border-b-2 border-orange-800 w-full p-2'></span>
                </div>
                <div className='flex flex-col items-center'>
                    <Link href='/settings'>
                        <div className='bg-purple-800 text-white p-3 rounded-lg inline-block'>
                            <FiSettings size={20} />
                        </div>
                    </Link>
                    <span className='border-b-2 border-orange-800 w-full p-2'></span>
                </div>
            </div>
            <main className='ml-20 w-full relative'>
                <NewEmployeeForm />
                {children}
            </main>
        </div>
    )
}

export default Sidebar