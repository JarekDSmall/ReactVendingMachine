// Navigation.js
import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li><NavLink to="/" end activeClassName="active">Home</NavLink></li>
        <li><NavLink to="/snack1" activeClassName="active">Snack 1</NavLink></li>
        <li><NavLink to="/snack2" activeClassName="active">Snack 2</NavLink></li>
        <li><NavLink to="/snack3" activeClassName="active">Snack 3</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navigation;
