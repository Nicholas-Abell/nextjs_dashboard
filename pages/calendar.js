import React, { useState, useContext, useEffect } from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from '@fullcalendar/interaction'
import { DataContext } from './_app';
import { v4 as uuidv4 } from 'uuid';

const Calendar = () => {
    const { employeeList, shift, setSelectedEmployee, selectedEmployee } = useContext(DataContext);
    const [events, setEvents] = useState([]);
    const [id, setId] = useState(0);

    useEffect(() => {
        console.log('id changed to: ' + id);
        employeeList.map((employee) => {
            if (employee.id == id) {
                setSelectedEmployee(employee);
                console.log(selectedEmployee);
            }
        })
    }, [id])

    function handleDateClick(info) {
        console.log("Date clicked!");
        console.log("Clicked on: " + info.dateStr);
        const event = {
            title: selectedEmployee?.name?.first + ' ' + selectedEmployee?.name?.last,
            start: info.date,
            allDay: true,
            id: uuidv4(),
        }

        setEvents([...events, event]);
    }

    function handleEventClick(eventInfo) {
        console.log('Delete Clicked: ' + eventInfo.event.id)
        const updatedEvents = events.filter((event) => event.id !== eventInfo.event.id);
        setEvents(updatedEvents);
    }


    function renderEventContent(eventInfo) {
        return (
            <div className='text-center flex flex-col items-center justify-center font-bold lg:text-xl'>
                <span>{eventInfo.event.title}</span>
                <button onClick={() => handleEventClick(eventInfo)} className='bg-red-500 rounded-lg px-2 py-1 hover:bg-red-700 z-10'>Delete</button>
            </div>
        )
    }

    return (
        <div className='w-full h-screen p-4'>
            <h1>{selectedEmployee?.name?.first}</h1>
            <div className='absolute top-4 w-full flex justify-center items-center mx-auto'>
                <select onChange={(e) => setId(e.target.value)} className='border rounded-lg p-2 w-[250px] h-[45px] flex justify-center items-center text-sm bg-gray-200'>
                    <option></option>
                    {
                        employeeList.filter(employee => employee.shift === shift).map((employee) => (
                            <option key={employee.id} value={employee.id}>{employee?.name.first}</option>
                        ))
                    }
                </select>
            </div>
            <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                dateClick={handleDateClick}
                height={'100%'}
                events={events}
                eventContent={renderEventContent}
                eventClick={handleEventClick}
            />

        </div>
    )
}

export default Calendar;