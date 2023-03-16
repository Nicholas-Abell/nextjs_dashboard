import React, { useContext, useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { DataContext } from '@/pages/_app';
import Link from 'next/link';
import { useRouter } from 'next/router';

const EditEmployeeForm = () => {
    const { employeeList, setEmployeeList, selectedEmployee, shift } = useContext(DataContext);

    const [firstName, setFirstName] = useState(selectedEmployee?.name.first);
    const [lastName, setLastName] = useState(selectedEmployee?.name.last);
    const [position, setPosition] = useState(selectedEmployee?.position);
    const [eShift, setEShift] = useState(shift);
    const [points, setPoints] = useState(selectedEmployee?.points);
    const [vacationTotal, setVactionTotal] = useState(selectedEmployee?.vacationTotal);
    const router = useRouter();

    const editEmployee = (e) => {
        e.preventDefault();
        console.log('Employee Edited');
        const updatedEmployee = {
            ...selectedEmployee,
            name: {
                first: firstName,
                last: lastName,
            },
            id: Math.random(2000),
            shift: eShift,
            position: position,
            worksToday: true,
            vacationTotal: vacationTotal,
            vactionRemaining: vacationTotal,
            points: points
        }
        const updatedList = employeeList.map((employee) =>
            employee.id === selectedEmployee.id ? updatedEmployee : employee
        );
        setEmployeeList(updatedList);
        router.push('/employees');
    }

    const deleteEmployee = (e) => {
        e.preventDefault();
        const updatedEmployeeList = employeeList.filter(employee => employee.id !== selectedEmployee.id);
        setEmployeeList(updatedEmployeeList);
        router.push('/employees');
    }

    return (
        <div className='relative h-screen w-full'>
            <div className='text-black z-20 absolute w-full h-full right-0 m-auto bg-black border rounded-lg items-center flex justify-center'>
                <Link href='employees'>
                    <AiFillCloseCircle size={50} className='text-white absolute top-4 right-4 hover:text-gray-500 cursor-pointer' />
                </Link>
                <form className='flex flex-col gap-4 pt-20 bg-slate-700 md:w-[80%] p-8  rounded-lg items-center justify-center'>
                    <div className='w-full lg:mb-8'>
                        <h1 className='text-center text-white text-2xl font-bold'>{selectedEmployee?.name.first} {selectedEmployee?.name.last}</h1>
                    </div>
                    <div className='flex flex-col items-end gap-4'>
                        <div>
                            <label className='text-white text-xl font-bold'>First: </label>
                            <input onChange={(e) => setFirstName(e.target.value)} defaultValue={firstName} placeholder={firstName} type='text' className=' rounded-lg text-center' />
                        </div>
                        <div>
                            <label className='text-white text-xl font-bold'>Last: </label>
                            <input onChange={(e) => setLastName(e.target.value)} defaultValue={lastName} placeholder={lastName} type='text' className='rounded-lg text-center' />
                        </div>
                        <div>
                            <label className='text-white text-xl font-bold'>Position: </label>
                            <input onChange={(e) => setPosition(e.target.value)} defaultValue={position} placeholder={position} type='text' className='rounded-lg text-center' />
                        </div>
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
                            <input onChange={(e) => setPoints(e.target.value)} defaultValue={points} placeholder={points} type='number' className='text-black w-16 h-8 rounded-lg text-center' />
                        </div>
                        <div className='flex flex-col justify-center items-center gap-4'>
                            <label className='text-white text-xl font-bold underline'>Vacation</label>
                            <input onChange={(e) => setVactionTotal(e.target.value)} defaultValue={vacationTotal} placeholder={vacationTotal} type='number' className='text-black w-16 h-8 rounded-lg text-center' />
                        </div>
                    </div>
                    <div className='w-full flex items-center justify-center mt-8 gap-4'>
                        <button type='submit' onClick={deleteEmployee} className='bg-red-400 border-2 border-black w-[160px] h-[60px] rounded-lg text-lg font-bold hover:bg-red-800'>Remove</button>
                        <button type='submit' onClick={editEmployee} className='bg-white border-2 border-black w-[160px] h-[60px] rounded-lg text-lg font-bold hover:bg-slate-300'>Save Changes</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditEmployeeForm;