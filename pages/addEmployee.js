import React, { useContext, useState, useEffect } from 'react';
import { addDoc } from 'firebase/firestore';
import { AiFillCloseCircle } from 'react-icons/ai';
import { DataContext } from '@/pages/_app';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { v4 as uuidv4 } from 'uuid';

const NewEmployeeForm = () => {
    const { shift, usersCollectionRef } = useContext(DataContext);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [position, setPosition] = useState('');
    const [eShift, setEShift] = useState(shift);
    const [points, setPoints] = useState(0);
    const [vacationTotal, setVacationTotal] = useState(0);
    const router = useRouter();

    const addEmployee = async (e) => {
        e.preventDefault();
        console.log('Employee Added');

        await addDoc(usersCollectionRef, {
            firstName: firstName,
            lastName: lastName,
            id: uuidv4(),
            shift: eShift,
            position: position,
            worksToday: true,
            vacationTotal: vacationTotal,
            vacationRemaining: vacationTotal,
            vacationDays: 'test',
            points: points
        })

        router.push('/employees');
    }

    return (
        <div className='h-screen w-full relative'>
            <div className='text-black z-20 absolute w-full h-full right-0 m-auto bg-black border rounded-lg items-center flex justify-center'>
                <Link href='employees'>
                    <AiFillCloseCircle size={50} className='text-white absolute top-4 right-4 hover:text-gray-500 cursor-pointer' />
                </Link>
                <form onSubmit={(e) => e.preventDefault} className='flex flex-col gap-4 pt-20 bg-slate-700 md:w-[80%] p-8  rounded-lg items-center justify-center'>
                    <div className='flex flex-col items-end gap-4'>
                        <div>
                            <label className='text-white text-xl font-bold'>First: </label>
                            <input onChange={(e) => setFirstName(e.target.value)} value={firstName} type='text' className=' rounded-lg text-center' />
                        </div>
                        <div>
                            <label className='text-white text-xl font-bold'>Last: </label>
                            <input onChange={(e) => setLastName(e.target.value)} value={lastName} type='text' className='rounded-lg text-center' />
                        </div>
                        <div>
                            <label className='text-white text-xl font-bold'>Position: </label>
                            <input onChange={(e) => setPosition(e.target.value)} value={position} type='text' className='rounded-lg text-center' />
                        </div>
                    </div>
                    <div className='flex gap-8 pt-4'>
                        <div className='flex flex-col items-center justify-center gap-4'>
                            <h2 className='text-white text-xl font-bold underline'>Shift</h2>
                            <select onChange={(e) => setEShift(e.target.value)} defaultValue={shift} className='text-black border rounded-lg p-2 flex justify-center items-center text-sm'>
                                <option value='1st'>1st</option>
                                <option value='2cnd'>2cnd</option>
                                <option value='3rd'>3rd</option>
                            </select>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-4'>
                            <label className='text-white text-xl font-bold underline'>Points</label>
                            <input onChange={(e) => setPoints(e.target.value)} value={points} type='number' className='text-black w-16 h-8 rounded-lg text-center'></input>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-4'>
                            <label className='text-white text-xl font-bold underline'>Vacation</label>
                            <input onChange={(e) => setVacationTotal(e.target.value)} value={vacationTotal} type='number' className='text-black w-16 h-8 rounded-lg text-center'></input>
                        </div>
                    </div>
                    <div className='w-full flex items-center justify-center mt-8'>
                        <button onClick={addEmployee} className='bg-white w-[120px] h-[50px] rounded-lg text-lg font-bold hover:bg-slate-300'>Add</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NewEmployeeForm;