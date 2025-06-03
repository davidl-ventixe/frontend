import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/Symbol.svg'
import ticketIcon from '../images/Ticket.svg'

const Nav = () => {
  return (
    <nav>
      <div className="nav-header">
        <img src={logo} alt="Ventixe Logo" className="nav-logo" />
        <span className="nav-title">Ventixe</span>
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/" className="nav-link">
            <img src={ticketIcon} alt="Events icon" className="nav-icon" />
            <span>Events</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav