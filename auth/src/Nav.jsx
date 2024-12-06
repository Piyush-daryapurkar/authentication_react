import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'

const Nav = () => {
  return (
  <>
    <div>
      <nav>
        <div className="main">
          <div className="menu">
          <ul><li><Link className='link' to="/">Home</Link></li></ul>
          <ul><li><Link className='link' to="">About</Link></li></ul>

          <ul><li><Link className='link' to="">Contact</Link></li></ul>

          <ul><li><Link className='link' to="">Help</Link></li></ul>


          <ul><li><Link className='link'  to="/signup">Signup</Link></li></ul>

          

          </div>

        </div>
      </nav>
    </div>
  </>
  )
}

export default Nav;
