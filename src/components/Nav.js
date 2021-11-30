import React from 'react';
import { Link } from 'react-router-dom';
import './pages.css';

function Nav() {
  return (
    <nav>
      <ul className="Navlist">
        <Link to="/">
          <li id="home">Home</li>
        </Link>
        <Link to="/calculator">
          <li id="calculator">Calculator</li>
        </Link>
        <Link to="/quote">
          <li>Quote</li>
        </Link>
      </ul>
    </nav>

  );
}
export default Nav;
