// Snack3.js
import React from 'react';
import { NavLink } from 'react-router-dom';

function Snack3() {
  return (
    <div className="container">
      <h1>Snack 3</h1>
      <p>This is the mouth-watering Snack 3. Savor it!</p>
      <NavLink to="/" activeClassName="active">Go back</NavLink>
    </div>
  );
}

export default Snack3;
