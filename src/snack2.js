// Snack2.js
import React from 'react';
import { NavLink } from 'react-router-dom';

function Snack2() {
  return (
    <div className="container">
      <h1>Snack 2</h1>
      <p>This is the scrumptious Snack 2. Bon appétit!</p>
      <NavLink to="/" activeClassName="active">Go back</NavLink>
    </div>
  );
}

export default Snack2;
