import React from 'react'
import { Link } from 'react-router-dom'

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen ? 'grid grid-rows-4  m-2 text-center items-center' : 'hidden'
      }
      onClick={toggle}
    >
      <Link className="dropdown-navbar" to="/">
        Home
      </Link>
      <Link className="dropdown-navbar" to="menu">
        Menu
      </Link>
      <Link className="dropdown-navbar" to="about">
        About
      </Link>
      <Link className="dropdown-navbar" to="contact">
        Contact
      </Link>
    </div>
  )
}

export default Dropdown
