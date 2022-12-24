import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../Images/Logo.png';

const Navbar = () => {
  return (
    <nav className="navbar sticky-top border-bottom border-dark  p-3 mb-3" style={{ backgroundColor: 'lightblue' }}>
      <div className="container" >
        <NavLink className="navbar-brand" to={"/"}>
          <img src={logo} alt="Nav" height="60px" />
        </NavLink>
        <ul className="navbar-nav d-flex flex-row" >
          <li className="nav-item ">
            <a className="nav-link" href="/" style={{ fontWeight: "bold", fontSize: '20px' }}>Home</a>
          </li>
          <li className="nav-item mx-5">
            <a className="nav-link" href="/my-quizzes" style={{ fontWeight: "bold", fontSize: '20px' }}>MyQuizzes</a>
          </li>
        </ul>
      </div>
    </nav>
  
  )
}

export default Navbar;
