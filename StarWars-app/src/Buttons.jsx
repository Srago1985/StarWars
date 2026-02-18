import React from 'react'

const Buttons = ({ activeSection, onSectionChange }) => {
  const items = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About me' },
    { id: 'starwars', label: 'Star Wars' },
    { id: 'contact', label: 'Contact' }
  ]

  return (
    <ul className="nav gap-3">
      {items.map((item) => (
        <li key={item.id} className="nav-item">
          <button
            type="button"
            className={`btn btn-danger border-warning ${activeSection === item.id ? 'active' : ''}`}
            aria-pressed={activeSection === item.id}
            onClick={() => onSectionChange(item.id)}
          >
            {item.label}
          </button>
        </li>
      ))}
    </ul>
  )
}

export default Buttons