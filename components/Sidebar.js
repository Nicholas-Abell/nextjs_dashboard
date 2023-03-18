import Link from 'next/link';
import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import { RxDashboard, RxPerson } from 'react-icons/rx';
import { BsFillCalendarDayFill } from 'react-icons/bs';
import { FiSettings } from 'react-icons/fi';
import { DataContext } from '@/pages/_app';

const Sidebar = ({ children }) => {
    const { shift, shiftSelect } = useContext(DataContext);
    const router = useRouter();

    const isActiveRoute = (route) => {
        return router.pathname === route;
    }

    // const getIconStyle = (route) => {
    //     if (isActiveRoute(route)){
    //         return 'bg-purple-800'
    //     }
    // }

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
                        <div className={isActiveRoute('/') ? 'bg-purple-800 text-white p-3 rounded-lg inline-block' : 'bg-slate-500 text-white p-3 rounded-lg inline-block'}>
                            <RxDashboard size={20} />
                        </div>
                    </Link>
                    <span className='border-b-2 border-orange-800 w-full p-2'></span>
                </div>
                <div className='flex flex-col items-center'>
                    <Link href='/employees'>
                        <div className={isActiveRoute('/employees') ? 'bg-purple-800 text-white p-3 rounded-lg inline-block' : 'bg-slate-500 text-white p-3 rounded-lg inline-block'}>
                            <RxPerson size={20} />
                        </div>
                    </Link>
                    <span className='border-b-2 border-orange-800 w-full p-2'></span>
                </div>
                <div className='flex flex-col items-center'>
                    <Link href='/calendar'>
                        <div className={isActiveRoute('/calendar') ? 'bg-purple-800 text-white p-3 rounded-lg inline-block' : 'bg-slate-500 text-white p-3 rounded-lg inline-block'}>
                            <BsFillCalendarDayFill size={20} />
                        </div>
                    </Link>
                    <span className='border-b-2 border-orange-800 w-full p-2'></span>
                </div>
                <div className='flex flex-col items-center'>
                    <Link href='/settings'>
                        <div className={isActiveRoute('/settings') ? 'bg-purple-800 text-white p-3 rounded-lg inline-block' : 'bg-slate-500 text-white p-3 rounded-lg inline-block'}>
                            <FiSettings size={20} />
                        </div>
                    </Link>
                    <span className='border-b-2 border-orange-800 w-full p-2'></span>
                </div>
            </div>
            <main className='ml-20 w-full relative overflow-hidden'>
                {children}
            </main>
        </div>
    )
}

export default Sidebar