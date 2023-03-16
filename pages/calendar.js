import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from '@fullcalendar/interaction'

const Calendar = () => {
    function handleDateClick(info) {
        console.log("Date clicked!");
        console.log("Clicked on: " + info.dateStr);
    }

    return (
        <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            dateClick={handleDateClick}
        />
    )
}

export default Calendar;