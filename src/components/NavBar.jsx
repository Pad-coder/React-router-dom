import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    
    <div className="collapse navbar-collapse" id="navbarNav" style={{justifyContent:"center"}}>
      <ul className="navbar-nav">
        
        <li className="nav-item">
          <Link to="/" className="nav-link" aria-current="page">All</Link>
        </li>
        <li className="nav-item">
          <Link to='./Full-stack-development' className="nav-link" aria-current="page">Full Stack Development</Link>
        </li>
        <li className="nav-item">
          <Link to='/Data-science'className="nav-link" aria-current="page">Data Science</Link>
        </li>
        <li className="nav-item">
          <Link to='./Cyber-security' className="nav-link" aria-current="page">Cyber security</Link>
        </li>
        <li className="nav-item">
          <Link to='/Career' className="nav-link" aria-current="page">Career</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}
