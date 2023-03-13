import React, { useContext } from 'react';
import { BsPersonFill } from 'react-icons/bs';
import { DataContext } from '@/pages/index.js';

const RecentOrders = () => {

    const data = useContext(DataContext);

    return (
        <div className='w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-scroll'>
            <h1>Upcoming Vacation</h1>
            <ul>
                {
                    data.map((employee, id) => {
                        return (
                            <li key={id} className='bg-gray-50 hover:bg-gray-100 rounded-lg my-4 flex p-2 items-center cursor-pointer justify-between'>
                                <div className='flex'>
                                    <div className='bg-purple-300 p-3 rounded-lg'>
                                        <BsPersonFill className='text-purple-800' />
                                    </div>
                                    <div className='pl-4'>
                                        <p className='text-gray-800 font-bold'>{employee.name.first}</p>
                                        <p className='text-gray-400 text-sm'>Date :{}</p>
                                    </div>
                                </div>
                                <p className='lg:flex md:hidden'>{employee.seniorityDate}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default RecentOrders