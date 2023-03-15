import React, { useContext, useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { DataContext } from '@/pages/_app';

const NewEmployeeForm = () => {
    const { employeeScreen, setEmployeeScreen, employeeList, setEmployeeList } = useContext(DataContext);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [position, setPosition] = useState('');
    const [eShift, setEShift] = useState('');
    const [points, setPoints] = useState(0);
    const [vacationTotal, setVactionTotal] = useState(0);

    const clearInput = () => {
        setEmployeeScreen(false);
        setFirstName('');
        setLastName('');
        setPosition('');
        setPoints('');
        setVactionTotal('');
    }

    const addEmployee = (e) => {
        e.preventDefault();
        console.log('Employee Added');
        setEmployeeList([...employeeList, {
            name: {
                first: firstName,
                last: lastName,
            },
            id: 1,
            shift: eShift,
            position: position,
            worksToday: true,
            vacationTotal: vacationTotal,
            vactionRemaining: vacationTotal,
            points: points
        }])
    }


    return (
        <div className='text-black z-20 absolute w-full h-full right-0 m-auto bg-black border rounded-lg items-center flex justify-center' style={employeeScreen ? { display: 'flex' } : { display: 'none' }}>
            <AiFillCloseCircle onClick={() => setEmployeeScreen(false)} size={50} className='text-white absolute top-4 right-4 hover:text-gray-500 cursor-pointer' />
            <form onSubmit={(e) => e.preventDefault} className='flex flex-col gap-4 pt-20 bg-slate-800 p-32 rounded-lg items-end justify-center'>
                <div>
                    <label className='text-white text-xl font-bold'>First: </label>
                    <input onChange={(e) => setFirstName(e.target.value)} type='text' className=' rounded-lg text-center' />
                </div>
                <div>
                    <label className='text-white text-xl font-bold'>Last: </label>
                    <input onChange={(e) => setLastName(e.target.value)} type='text' className='rounded-lg text-center' />
                </div>
                <div>
                    <label className='text-white text-xl font-bold'>Position: </label>
                    <input onChange={(e) => setPosition(e.target.value)} type='text' className='rounded-lg text-center' />
                </div>
                <div className='flex gap-8 pt-4'>
                    <div className='flex flex-col items-center justify-center gap-4'>
                        <h2 className='text-white text-xl font-bold underline'>Shift</h2>
                        <select onChange={(e) => setEShift(e.target.value)} className='text-black border rounded-lg p-2 flex justify-center items-center text-sm'>
                            <option value='1st'>1st</option>
                            <option value='2cnd'>2cnd</option>
                            <option value='3rd'>3rd</option>
                        </select>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-4'>
                        <label className='text-white text-xl font-bold underline'>Points</label>
                        <input onChange={(e) => setPoints(e.target.value)} type='number' className='text-black w-16 h-8 rounded-lg text-center'></input>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-4'>
                        <label className='text-white text-xl font-bold underline'>Vacation</label>
                        <input onChange={(e) => setVactionTotal(e.target.value)} type='number' className='text-black w-16 h-8 rounded-lg text-center'></input>
                    </div>
                    <button onClick={addEmployee}>Add</button>
                </div>
            </form>
        </div>
    )
}

export default NewEmployeeForm;