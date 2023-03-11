import React from 'react';
import { data } from '../data/data.js';
import { FaShoppingBag } from 'react-icons/fa';

const RecentOrders = () => {
    return (
        <div className='col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-scroll'>
            <h1>Recent Orders</h1>
            <ul>
                {
                    data.map((order, id) => {
                        return (
                            <li key={id} className='bg-gray-50 hover:bg-gray-100 rounded-lg my-4 flex p-2 items-center cursor-pointer'>
                                <div><FaShoppingBag /></div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default RecentOrders