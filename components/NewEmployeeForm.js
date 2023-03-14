import React from 'react';

const NewEmployeeForm = () => {
    return (
        <div className='z-20 absolute w-full h-screen right-0 m-auto bg-black border rounded-lg items-center flex justify-center'>
            <form onSubmit={(e) => e.preventDefault} className='flex flex-col pt-4 bg-slate-800 p-32 text-white rounded-lg'>
                <label>First: </label>
                <input type='text' className='w-32' />
            </form>
        </div>
    )
}

export default NewEmployeeForm