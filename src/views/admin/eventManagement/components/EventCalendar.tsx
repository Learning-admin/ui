
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

const EventCalendar = (props: any) => {

    const events: any = [
        {
            id: 1,
            title: 'event 1',
            start: '2023-07-14T10:00:00',
            end: '2023-07-14T12:00:00',
        },
        {
            id: 2,
            title: 'event 2',
            start: '2023-07-16T13:00:00',
            end: '2023-07-16T18:00:00',
        },
        {
            id: 3,
            title: 'event 3',
            start: '2023-07-17',
            end: '2023-07-20'
        },
    ];

    return (
        <div>
            <span>EventCalendar</span>

            <div className="App">
                <FullCalendar
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    initialView="dayGridMonth"
                    headerToolbar={{
                        center: 'dayGridMonth,timeGridWeek,timeGridDay new',
                    }}
                    customButtons={{
                        new: {
                            text: 'new',
                            click: () => console.log('new event'),
                        },
                    }}
                    events={events}
                    dateClick={(e) => console.log(e.dateStr)}
                    eventClick={(e) => console.log(e.event.id)}
                />
            </div>
        </div>
    )
}

export default EventCalendar