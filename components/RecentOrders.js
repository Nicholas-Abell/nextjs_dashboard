import React from 'react';
import { data } from '../data/data.js';
import { FaShoppingBag } from 'react-icons/fa';

const RecentOrders = () => {
    return (
        <div className='w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-scroll'>
            <h1>Recent Orders</h1>
            <ul>
                {
                    data.map((order, id) => {
                        return (
                            <li key={id} className='bg-gray-50 hover:bg-gray-100 rounded-lg my-4 flex p-2 items-center cursor-pointer justify-between'>
                                <div className='flex'>
                                    <div className='bg-purple-300 p-3 rounded-lg'>
                                        <FaShoppingBag className='text-purple-800' />
                                    </div>
                                    <div className='pl-4'>
                                        <p className='text-gray-800 font-bold'>${order.total}</p>
                                        <p className='text-gray-400 text-sm'>{order.name.first}</p>
                                    </div>
                                </div>
                                <p className='lg:flex md:hidden'>{order.date}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default RecentOrders