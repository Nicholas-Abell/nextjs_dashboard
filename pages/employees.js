import React, { useState, useContext, useEffect } from 'react';
import { DataContext } from './_app.js';
import { BsPersonFill, BsThreeDotsVertical } from 'react-icons/bs';
import Link from 'next/link';

const customers = () => {
    const { shift, employeeList, handleEmployeeClick } = useContext(DataContext);

    return (
        <div className='bg-gray-300 min-h-screen'>
            <div className='flex justify-between p-4'>
                <h2>Employees</h2>
            </div>
            <div className='p-4'>
                <div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
                    <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between'>
                        <span>Name</span>
                        <span className='sm:text-left text-right'>Points</span>
                        <span className='hidden md:grid'>Upcoming</span>
                        <span className='hidden sm:grid'>Vacation Time Remaining</span>
                    </div>
                    <ul>
                        {
                            employeeList?.filter((employee) => employee.shift === shift).map((employee) => (
                                <li key={employee.id} className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
                                    <div className='flex items-center'>
                                        <div className='bg-purple-100 p-3 rounded-lg'>
                                            <BsPersonFill className='text-purple-800' />
                                        </div>
                                        <p className='pl-4'>{employee?.firstName} {employee?.lastName}</p>
                                    </div>
                                    <p className='text-gray-300 sm:text-left text-right' style={employee?.points < -4 ? { color: 'red' } : null}>{employee.points}</p>
                                    <p className='hidden md:flex '>{'today'}</p>
                                    <div className='sm:flex hidden justify-between items-center'>
                                        <p>{employee?.vacationRemaining} hrs</p>
                                        <Link href='editEmployee'>
                                            <BsThreeDotsVertical id={employee?.id} onClick={() => handleEmployeeClick(employee)} className='z-10 hover:text-gray-400' />
                                        </Link>
                                    </div>
                                </li>
                            ))
                        }
                        <Link href='/addEmployee'>
                            <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>+ Add Employee</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default customers