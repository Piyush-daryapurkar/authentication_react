import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'

const Nav = () => {
  return (
  <>
    <div>
      <nav>
        <div className="logo">
          <div className="menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
        
          </ul>

          <ul>
            <li>
            <Link to="/signup">Signup</Link>
            </li>
        
          </ul>

          <ul>
            <li>
            <Link to="/login">Login</Link>
            </li>
        
          </ul>
          </div>

        </div>
      </nav>
    </div>
  </>
  )
}

export default Nav;
