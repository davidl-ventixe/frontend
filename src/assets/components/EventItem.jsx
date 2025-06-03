import React from 'react'
import { Link } from 'react-router-dom'

const EventItem = ({ item }) => {
  return (
    <Link to={`/events/${item.id}`} className="event-card">

      <div className="card-image" />


      <div className="card-body">
        <h3 className="card-title">{item.title}</h3>

        <div className="card-meta">
          <span>📅 {new Date(item.date).toLocaleDateString()}</span>
          <span>📍 {item.location}</span>
        </div>

        <div className="card-price">${item.price}</div>
      </div>
    </Link>
  )
}

export default EventItem
