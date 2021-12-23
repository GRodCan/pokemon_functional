import { Link } from "react-router-dom";
import React from 'react'

function Nav() {
  return (
    <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/search">Search</Link></li>
      <li><Link to="/new">Crear Pokemon</Link></li>
      
    </ul>
  </nav>
  )
}

export default Nav
