// Snack1.js
import React from 'react';
import { NavLink } from 'react-router-dom';

function Snack1() {
  return (
    <div className="container">
      <h1>Snack 1</h1>
      <p>This is the delicious Snack 1. Enjoy!</p>
      <NavLink to="/" activeClassName="active">Go back</NavLink>
    </div>
  );
}

export default Snack1;
