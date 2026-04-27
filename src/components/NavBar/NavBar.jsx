import React from 'react'
import "./NavBar.css"
import { dataNav } from '../../Utils/data'
export const NavBar = () => {
  return (
    <nav className='nav-navigation'>
      {/* 🔥 IZQUIERDA */}
      <div className="nav-logo">
        Gabriel Claros
      </div>

      <ul className="nav-links">
        {
          dataNav.map(nav =>
            <a
              className="nav-link"
              key={nav.id}
              href={`#${nav.link}`}
            >
              <span>{nav.title}</span>
            </a>
          )
        }
      </ul>



    </nav>
  )
}
