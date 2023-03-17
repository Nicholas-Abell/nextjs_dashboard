import React, { useState, createContext, useEffect } from 'react';
import Sidebar from '@/components/Sidebar';
import '@/styles/globals.css';

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
    name: {
      first: 'Gary',
      last: 'Amalia',
    },
    id: 50005156,
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
    worksToday: true,
    vacationTotal: 180,
    vactionRemaining: 80,
    points: 0,
  },
  {
    id: 3,
    shift: '3rd',
    name: {
      first: 'Aubry',
      last: 'Williams',
    },
    worksToday: true,
    vacationTotal: 180,
    vactionRemaining: 80,
    points: 0,
  },
  {
    id: 335345,
    shift: '3rd',
    name: {
      first: 'Vexalia',
      last: 'Williams',
    },
    worksToday: true,
    vacationTotal: 180,
    vactionRemaining: 70,
    points: 0,
  },
]

export const DataContext = createContext();

export default function App({ Component, pageProps }) {
  const [shift, setShift] = useState('2cnd');
  const [employeeList, setEmployeeList] = useState(employees);
  const [newEmployeeScreen, setNewEmployeeScreen] = useState(false);
  const [editEmployeeScreen, setEditEmployeeScreen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState();

  const shiftSelect = (e) => {
    setShift(e.target.value)
  };

  const employeeSelect = (employee) => {
    // const id = e.target.value;
    // const employee = employeeList.find((emp) => emp.id === id);
    // setSelectedEmployee(employee);
    // console.log(selectedEmployee)
    employeeList.map((emp) => {
      if (emp.id === employee.target.value) {
        console.log(employee.name.first + ' ' + employee.name.last)
        setSelectedEmployee(employee);
        console.log(employee);
      }
    })

  }

  const handleEmployeeClick = (employee) => {
    employeeList.map((emp) => {
      if (emp.id === employee.id) {
        console.log(employee.name.first + ' ' + employee.name.last)
        setSelectedEmployee(employee);
        console.log(employee);
      }
    })
  };

  useEffect(() => {
    console.log(selectedEmployee)
  }, [selectedEmployee])

  return (
    <DataContext.Provider
      value={{
        shift, setShift,
        shiftSelect, employeeList, setEmployeeList,
        handleEmployeeClick, newEmployeeScreen,
        setNewEmployeeScreen,
        editEmployeeScreen, setEditEmployeeScreen,
        selectedEmployee, setSelectedEmployee, employeeSelect
      }}>
      <Sidebar>
        <Component {...pageProps} />
      </Sidebar>
    </DataContext.Provider>
  )
};
