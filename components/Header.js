import React, { useContext } from 'react';
import { DataContext } from '../pages/_app.js';

const Header = () => {
    const { employees } = useContext(DataContext);

    const shiftSelect = (e) => {
        setShift(e.target.value)
    }

    return (
        <>
            <div className='flex justify-between px-4 pt-4'>
                <h2>Dashboard</h2>
            </div>

        </>
    )
}

export default Header