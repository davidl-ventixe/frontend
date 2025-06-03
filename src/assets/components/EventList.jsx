import React, { useState, useEffect } from 'react'
import EventItem from './EventItem'


const EventList = () => {
    const [events, setEvents] = useState([])

    const getEvents = async () => {
        const res = await fetch ("https://ecutb-eventservice-egenhmd0a3b9gudn.swedencentral-01.azurewebsites.net/api/Events")

        if (res.ok) {
            const response = await res.json()
            setEvents(response.result)
        }
    }

    useEffect (() => {
        getEvents()
    }, [])
    
    return (
        <section id="events">
            {
                events.map(event => (<EventItem key={event.id} item={event} />))
            }
        </section>
    )
}

export default EventList