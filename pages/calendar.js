import React, { useState, useContext, useEffect } from 'react'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { AiFillCloseCircle } from 'react-icons/ai'
import { DataContext } from './_app';
import { v4 as uuidv4 } from 'uuid';
import { updateDoc, doc } from 'firebase/firestore';
import { db } from '@/data/firebase-config';

const Calendar = () => {
    const { employeeList, shift, setSelectedEmployee, selectedEmployee, calendarEvents, setCalendarEvents, handleEmployeeClick } = useContext(DataContext);
    const [employeeVacation, setEmployeeVacation] = useState([selectedEmployee?.upComingVacation])
    const [firstName, setFirstName] = useState(selectedEmployee?.firstName);
    const [lastName, setLastName] = useState(selectedEmployee?.lastName);
    const [position, setPosition] = useState(selectedEmployee?.position);
    const [eShift, setEShift] = useState(shift);
    const [points, setPoints] = useState(selectedEmployee?.points);
    const [vacationTotal, setVacationTotal] = useState(selectedEmployee?.vacationTotal);
    const [vacationDays, setVacationDays] = useState(selectedEmployee?.vacationDays);
    const [id, setId] = useState(0);

    useEffect(() => {
        setSelectedEmployee(null);
    }, [])

    useEffect(() => {
        console.log('id changed to: ' + id);
        handleEmployeeClick(id)
        employeeList?.map((employee) => {
            if (employee.id == id) {
                setSelectedEmployee(employee);
                console.log('Selected: ' + selectedEmployee);
            }
        })
        console.log('Selected:')
        console.log(selectedEmployee);
    }, [id]);

    const handleDateClick = async (info) => {
        const eventDate = info.date;
        const eventId = uuidv4();

        console.log("Date clicked!");
        console.log("Clicked on: " + info.dateStr);
        const event = {
            title: selectedEmployee?.name?.first + ' ' + selectedEmployee?.name?.last,
            start: eventDate,
            allDay: true,
            id: eventId,
        }

        const userDoc = doc(db, 'employees', selectedEmployee?.id);

        const newUpcomingVacation = [...employeeVacation, eventDate.toString()];
        // setVacationDays(newUpcomingVacation)

        const updatedEmployee = {
            ...selectedEmployee,
            firstName: firstName,
            lastName: lastName,
            shift: eShift,
            position: position,
            worksToday: true,
            points: points,
            vacationDays: vacationDays,
            vacationTotal: vacationTotal,
        }

        await updateDoc(userDoc, updatedEmployee)

        setCalendarEvents(prevEvents => [...prevEvents, event]);
    };

    function handleEventClick(eventInfo) {
        console.log('Delete Clicked: ' + eventInfo.event.id)
        const updatedEvents = calendarEvents?.filter((event) => event.id !== eventInfo.event.id);
        setCalendarEvents(updatedEvents);
    }


    function renderEventContent(eventInfo) {
        return (
            <div className='text-center flex flex-col items-center justify-center font-bold gap-4 py-2 lg:text-xl bg-slate-700'>
                <span>{eventInfo.event.title}</span>
                <div className='flex justify-center items-center'>
                    <AiFillCloseCircle size={30} onClick={() => handleEventClick(eventInfo)} className='text-red-600 rounded-lg hover:text-red-900 z-10 cursor-pointer' />
                </div>
            </div>
        )
    }

    return (
        <div className='w-full h-screen p-4'>
            <div className='absolute top-4 w-full flex justify-center items-center mx-auto'>
                <select onChange={(e) => setId(e.target.value)} className='border rounded-lg p-2 w-[250px] h-[45px] flex justify-center items-center text-sm bg-gray-200'>
                    <option></option>
                    {
                        employeeList?.filter(employee => employee.shift === shift).map((employee) => (
                            <option className='text-lg' key={employee.id} value={employee.id}>{employee?.firstName}</option>
                        ))
                    }
                </select>
            </div>
            <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                dateClick={selectedEmployee ? handleDateClick : null}
                height={'100%'}
                events={calendarEvents}
                eventContent={renderEventContent}
            // eventClick={handleEventClick}
            />

        </div>
    )
}

export default Calendar;