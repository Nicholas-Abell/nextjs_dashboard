import React, { useState, createContext } from 'react';
import Sidebar from '@/components/Sidebar'
import '@/styles/globals.css'

const employees = [
  {
    name: {
      first: 'Nick',
      last: 'Abell',
    },
    id: 1,
    shift: '2cnd',
    position: 'Clerk',
    worksToday: true,
    vacationTotal: 180,
    vactionRemaining: 120,
    points: -2,
    seniorityDate: 11,
  },
  {
    name: {
      first: 'Bob',
      last: 'Smith',
    },
    id: 2,
    position: 'Clerk',
    worksToday: false,
    shift: '2cnd',
    vacationTotal: 180,
    vactionRemaining: 10,
    points: -8,
  },
  {
    name: {
      first: 'Alexa',
      last: 'Amalia',
    },
    id: 6,
    position: 'Fork Lift',
    worksToday: true,
    shift: '2cnd',
    vacationTotal: 120,
    vactionRemaining: 90,
    points: 4,
  },
  {
    id: 5,
    shift: '1st',
    name: {
      first: 'Mirabelle',
      last: 'Martinez',
    },
    vacationTotal: 180,
    vactionRemaining: 80,
    points: 0,
    date: 'Now'
  },
  {
    id: 3,
    shift: '3rd',
    name: {
      first: 'Aubry',
      last: 'Williams',
    },
    vacationTotal: 180,
    vactionRemaining: 80,
    points: 0,
    total: 6969.69,
    method: 'Paypal',
    date: 'Now'
  },
]

export const DataContext = createContext(employees);

export default function App({ Component, pageProps }) {
  const [shift, setShift] = useState('2cnd');

  const shiftSelect = (e) => {
    setShift(e.target.value)
  }

  return (
    <DataContext.Provider value={{ employees, shift, setShift, shiftSelect }}>
      <Sidebar>
        <Component {...pageProps} />
      </Sidebar>
    </DataContext.Provider>
  )
}
