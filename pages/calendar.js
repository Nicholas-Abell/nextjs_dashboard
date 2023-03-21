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
    const { employeeList, shift, setSelectedEmployee, selectedEmployee, calendarEvents, setCalendarEvents } = useContext(DataContext);
    const [id, setId] = useState(0);

    useEffect(() => {
        setSelectedEmployee(null);
    }, [])

    useEffect(() => {
        console.log('id changed to: ' + id);
        employeeList?.map((employee) => {
            if (employee.id == id) {
                setSelectedEmployee(employee);
                console.log(selectedEmployee);
            }
        })
    }, [id]);

    const updateEmployee = async (day) => {
        const userDoc = doc(db, 'employees', id);
        const allDays = calendarEvents.filter(event => event?.employeeId === selectedEmployee?.id)
        const daysAdded = {
            ...selectedEmployee,
            vacationDays: [...allDays, day],
        }
        await updateDoc(userDoc, daysAdded);
    }

    const handleDateClick = async (info) => {
        const eventDate = info.date;
        const eventId = uuidv4();

        console.log("Date clicked!");
        console.log("Clicked on: " + info.dateStr);
        const event = {
            title: selectedEmployee?.firstName + ' ' + selectedEmployee?.lastName,
            start: eventDate,
            allDay: true,
            id: eventId,
            employeeId: selectedEmployee?.id
        }

        setCalendarEvents(prevEvents => [...prevEvents, event]);
        updateEmployee(eventDate);
    };

    const deleteDate = async (eventInfo) => {
        console.log('Delete Clicked: ' + eventInfo.event.id)
        const updatedEvents = calendarEvents?.filter((event) => event.id !== eventInfo.event.id);
        setCalendarEvents(updatedEvents);
    }


    function renderEventContent(eventInfo) {
        return (
            <div className='text-center flex flex-col items-center justify-center font-bold gap-4 py-2 lg:text-xl bg-slate-700'>
                <span>{eventInfo.event.title}</span>
                <div className='flex justify-center items-center'>
                    <AiFillCloseCircle size={30} onClick={() => deleteDate(eventInfo)} className='text-red-600 rounded-lg hover:text-red-900 z-10 cursor-pointer' />
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
            />

        </div>
    )
}

export default Calendar;