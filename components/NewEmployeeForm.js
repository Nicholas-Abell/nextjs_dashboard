import React from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';

const NewEmployeeForm = () => {
    return (
        <div className='z-20 absolute w-full h-full right-0 m-auto bg-black border rounded-lg items-center flex justify-center'>
            <AiFillCloseCircle size={50} className='text-white absolute top-4 right-4 hover:text-gray-500 cursor-pointer' />
            <form onSubmit={(e) => e.preventDefault} className='flex flex-col gap-4 pt-20 bg-slate-800 p-32 rounded-lg items-end justify-center'>
                <div>
                    <label className='text-white text-xl font-bold'>First: </label>
                    <input type='text' className='rounded-lg' />
                </div>
                <div>
                    <label className='text-white text-xl font-bold'>Last: </label>
                    <input type='text' className='rounded-lg' />
                </div>
                <div>
                    <label className='text-white text-xl font-bold'>Position: </label>
                    <input type='text' className='rounded-lg' />
                </div>
                <div className='flex gap-8 pt-4'>
                    <div className='flex flex-col items-center justify-center gap-4'>
                        <h2 className='text-white text-xl font-bold underline'>Shift</h2>
                        <select className='border rounded-lg p-2 flex justify-center items-center text-sm'>
                            <option value='1st'>1st</option>
                            <option value='2cnd'>2cnd</option>
                            <option value='3rd'>3rd</option>
                        </select>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-4'>
                        <label className='text-white text-xl font-bold underline'>Points</label>
                        <input type='number' className='w-16 h-8 rounded-lg text-center'></input>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-4'>
                        <label className='text-white text-xl font-bold underline'>Vacation</label>
                        <input type='number' className='w-16 h-8 rounded-lg text-center'></input>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default NewEmployeeForm;