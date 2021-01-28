import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ toggle }) => {
  return (
    // Se agrega flex para que ele navbar suba al top de la pagina
    <nav
      className="flex flex-row  justify-between items-center h-16 bg-white text-red relative shadow-sm font-mono"
      role="navigation"
    >
      <Link className="p-4" to="/">
        TONY
      </Link>
      <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      {/* agregar hidden despues de block es para ocultar el svg de la imagen */}
      <div className="pr-8 md:block hidden">
        <Link className="navbar-menu " to="/">
          Home
        </Link>
        <Link className="navbar-menu" to="menu">
          Menu
        </Link>
        <Link className="navbar-menu" to="about">
          About
        </Link>
        <Link className="navbar-menu" to="contact">
          Contact
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
