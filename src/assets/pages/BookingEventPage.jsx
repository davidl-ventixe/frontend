import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const BookingEventPage = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [event, setEvent] = useState({})
    const [formData, setFormData] = useState({
        eventId: id,
        firstName: '',
        lastName: '',
        email: '',
        streetName: '',
        postalCode: '',
        city: '',
        ticketquantity: 1
  })

    useEffect(() => {
        getEvent()
    }, [])

    const getEvent = async () => {
        try {
        const res = await fetch(`https://ecutb-eventservice-egenhmd0a3b9gudn.swedencentral-01.azurewebsites.net/api/Events/${id}`)
        if (!res.ok) throw new Error('Failed to fetch event')

        const data = await res.json()
        setEvent(data.result)
        } catch (err) {
        console.error(err)
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
    try {
        const res = await fetch(
        'https://ecutb-bookingservice-adgebqghf8afh4dv.swedencentral-01.azurewebsites.net/api/bookings',
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        }
        )

            if (!res.ok) {
            console.error("Booking failed")
            } else {
            console.log("Booking successful")
            navigate('/')
            }
        } catch (err) {
            console.error("Error submitting booking", err)
        }
    }


            return (
            <div className="booking-page">
      <form className="booking-form" onSubmit={handleSubmit} noValidate>
        <h1> {event.title}</h1>

        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="streetName">Street Name</label>
          <input
            id="streetName"
            type="text"
            name="streetName"
            value={formData.streetName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="postalCode">Postal Code</label>
          <input
            id="postalCode"
            type="text"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            id="city"
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn-submit">
          Book Now
        </button>
      </form>
    </div>
            )
}

export default BookingEventPage