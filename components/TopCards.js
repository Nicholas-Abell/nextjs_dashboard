import React, { useContext } from 'react';
import { DataContext } from '@/pages';
import { BsPersonFill } from 'react-icons/bs'

const TopCards = () => {
    const employees = useContext(DataContext);

    return (
        <div className='w-full flex justify-around items-center py-4'>
            {
                employees.map((employee) => (
                    <div className='bg-white border rounded-lg flex flex-col items-center justify-around w-[120px] h-[120px] flex-wrap'>
                        <div className='flex items-center justify-between'>
                            <div className='bg-purple-300 p-1 rounded-lg mr-2'>
                                <BsPersonFill className='text-purple-800' />
                            </div>
                            <p>{employee.name.first}</p>
                        </div>
                        <p className='text-gray-400'>{employee.position}</p>
                    </div>
                ))
            }
            {/* <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
                <div className='flex flex-col w-full pb-4'>
                    <p className='text-2xl font-bold'>$7,826</p>
                    <p className='text-gray-600'>Daily Revenue</p>
                </div>
                <p className='bg-green-200 flex justify-center items-center rounded-lg p-4 border'>
                    <span className='text-green-700 text-console.log();'>+18%</span>
                </p>
            </div>
            <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
                <div className='flex flex-col w-full pb-4'>
                    <p className='text-2xl font-bold'>$143</p>
                    <p className='text-gray-600'>Year to Date</p>
                </div>
                <p className='bg-green-200 flex justify-center items-center rounded-lg p-4 border'>
                    <span className='text-green-700 text-console.log();'>+18%</span>
                </p>
            </div>
            <div className='bg-white flex justify-between w-full border p-4 rounded-lg'>
                <div className='flex flex-col w-full pb-4'>
                    <p className='text-2xl font-bold'>$1,726</p>
                    <p className='text-gray-600'>Customers</p>
                </div>
                <p className='bg-green-200 flex justify-center items-center rounded-lg p-4 border'>
                    <span className='text-green-700 text-console.log();'>+18%</span>
                </p>
            </div> */}
        </div>
    )
}

export default TopCards