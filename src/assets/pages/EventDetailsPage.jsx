import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'


const EventDetailsPage = () => {
    const {id} = useParams()

        const [event, setEvent] = useState({})
    
        const getEvents = async () => {
            const res = await fetch (`https://ecutb-eventservice-egenhmd0a3b9gudn.swedencentral-01.azurewebsites.net/api/Events/${id}`)
    
            if (res.ok) {
                const response = await res.json()
                setEvent(response.result)
            }
        }
    
        useEffect (() => {
            getEvents()
        }, [])

  return (
    <div className="portal-wrapper">

    <Nav />


    <main className="event-details">

      <div className="event-image"></div>


      <div className="event-header">
        <h1>{event.title}</h1>
        <div className="event-meta">
        <div>
          📅 {new Date(event.date).toLocaleDateString()} –{" "}
          {new Date(event.date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </div>
        <div>📍 {event.location}</div>
      </div>
        <div className="price">${event.price}</div>
      </div>

      
      

      
      <section className="section">
        <h2>About Event</h2>
        <p>{event.description}</p>
      </section>

      
      <section className="section">
        <h2>Terms & Conditions</h2>
        <div className="terms-box">
          <ol>
            <li>All attendees must possess a valid ticket for entry.</li>
            <li>Tickets are non-refundable and non-transferable unless specified by the event organizer.</li>
            <li>Attendees must present a valid government-issued ID along with their ticket at the gate.</li>
            <li>Security reserves the right to refuse admission.</li>
          </ol>
        </div>
      </section>

      
      <Link to={`/events/booking/${id}`} className="btn-book">
        Book Event
      </Link>
    </main>


    <Footer />
  </div>
  )
}

export default EventDetailsPage