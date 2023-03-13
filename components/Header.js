import React, { useContext } from 'react';
import { DataContext } from '@/pages';

const Header = () => {
    const employee = useContext(DataContext);

    const shiftSelect = (e) => {
        setShift(e.target.value)
    }

    return (
        <>
            <div className='flex justify-between px-4 pt-4'>
                <h2>Dashboard</h2>
                {/* <div className='flex justify-between p-4'>
                    <h2>Employees</h2>
                    <select value={shift} onChange={shiftSelect} className='border rounded-lg p-2'>
                        <option value='1st'>1st</option>
                        <option value='2cnd'>2cnd</option>
                        <option value='3rd'>3rd</option>
                    </select>
                </div> */}
            </div>

        </>
    )
}

export default Header