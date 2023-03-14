import React, { useContext } from 'react';
import { DataContext } from '../pages/_app.js';
import { BsPersonFill } from 'react-icons/bs'

const TopCards = () => {
    const { employees, shift } = useContext(DataContext);

    return (
        <div className='pt-4'>
            <h2 className='pl-4 text-green-400 border-b-2'>In</h2>
            <div className='w-full flex items-center py-4 gap-4 pl-4'>
                {
                    employees.filter(employee => employee.shift === shift && employee.worksToday === true).map((employee) => (
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
            </div>
            <h2 className='pl-4 text-red-600 border-b-2'>Out</h2>
            <div className='w-full flex items-center py-4 gap-4 pl-4'>
                {
                    employees.filter(employee => employee.shift === shift && employee.worksToday !== true).map((employee) => (
                        <div className='bg-gray-300 border rounded-lg flex flex-col items-center justify-around w-[120px] h-[120px] flex-wrap'>
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
            </div>
        </div>
    )
}

export default TopCards