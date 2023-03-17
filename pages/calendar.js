import React, { useState, useContext, useEffect } from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from '@fullcalendar/interaction'
import { DataContext } from './_app'

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
            allDay: true
        }

        setEvents([...events, event]);
    }


    function renderEventContent(eventInfo) {
        return (
            <div>
                <span>{eventInfo.event.title}</span>
            </div>
        );
    }

    return (
        <div className='w-full h-screen p-4'>
            <h1>{selectedEmployee?.name?.first}</h1>
            <div className='absolute top-4 w-full flex justify-center items-center mx-auto'>
                <select onChange={(e) => setId(e.target.value)} className='border rounded-lg p-2 w-[250px] h-[45px] flex justify-center items-center text-sm bg-gray-200'>
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
            />

        </div>
    )
}

export default Calendar;