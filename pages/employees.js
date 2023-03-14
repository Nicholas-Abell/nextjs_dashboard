import React, { useState, useContext } from 'react';
import { DataContext } from './_app.js';
import { BsPersonFill, BsThreeDotsVertical } from 'react-icons/bs';

const customers = () => {
    const { employees, shift, setShift, shiftSelect } = useContext(DataContext);

    const addEmployee = () => {

    }

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
                            employees.filter((employee) => employee.shift === shift).map((employee, id) => (
                                <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
                                    <div className='flex items-center'>
                                        <div className='bg-purple-100 p-3 rounded-lg'>
                                            <BsPersonFill className='text-purple-800' />
                                        </div>
                                        <p className='pl-4'>{employee.name.first} {employee.name.last}</p>
                                    </div>
                                    <p className='text-gray-300 sm:text-left text-right'>{employee.points}</p>
                                    <p className='hidden md:flex '>{ }</p>
                                    <div className='sm:flex hidden justify-between items-center'>
                                        <p>{employee.vactionRemaining} hrs</p>
                                        <BsThreeDotsVertical />
                                    </div>
                                </li>
                            ))
                        }
                        <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>+ Add Employee</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default customers