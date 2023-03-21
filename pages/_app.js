import React, { useState, createContext, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/data/firebase-config';
import Sidebar from '@/components/Sidebar';
import '@/styles/globals.css';

// const employees = [
//   // {
//   //   id: 1,
//   //   name: {
//   //     first: 'Nick',
//   //     last: 'Abell',
//   //   },
//   //   upComingVavation: [],
//   //   shift: '2cnd',
//   //   position: 'Clerk',
//   //   worksToday: true,
//   //   vacationTotal: 180,
//   //   vactionRemaining: 120,
//   //   points: -2,
//   // },

export const DataContext = createContext();

export default function App({ Component, pageProps }) {
  const usersCollectionRef = collection(db, 'employees');
  const [shift, setShift] = useState('2cnd');
  const [employeeList, setEmployeeList] = useState();
  const [newEmployeeScreen, setNewEmployeeScreen] = useState(false);
  const [editEmployeeScreen, setEditEmployeeScreen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState();
  const [calendarEvents, setCalendarEvents] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setEmployeeList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getUsers();
  }, [])

  useEffect(() => {
    if (employeeList) {
      setCalendarEvents(employeeList.map((employee) => employee.vacationDays))
    }
  }, [employeeList]);

  useEffect(() => {
    console.log('Calendar: ')
    console.log(calendarEvents);
    console.log(calendarEvents.map((event) => event))
  }, [calendarEvents])

  const shiftSelect = (e) => {
    setShift(e.target.value)
  };

  const handleEmployeeClick = (employee) => {
    employeeList?.map((emp) => {
      if (emp.id === employee.id) {
        setSelectedEmployee(employee);
      }
    })
  };

  return (
    <DataContext.Provider
      value={{
        shift, setShift,
        shiftSelect, employeeList, setEmployeeList,
        handleEmployeeClick, newEmployeeScreen,
        setNewEmployeeScreen,
        editEmployeeScreen, setEditEmployeeScreen,
        selectedEmployee, setSelectedEmployee,
        calendarEvents, setCalendarEvents, usersCollectionRef
      }}>
      <Sidebar>
        <Component {...pageProps} />
      </Sidebar>
    </DataContext.Provider>
  )
};
