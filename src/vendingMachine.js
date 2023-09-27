// VendingMachine.js
import React from 'react';
import { NavLink } from 'react-router-dom';

function VendingMachine() {
  return (
    <div className="container">
      <h1>Vending Machine</h1>
      <ul className="snack-list">
        <li className="snack-item"><NavLink to="/snack1" activeClassName="active">Snack 1</NavLink></li>
        <li className="snack-item"><NavLink to="/snack2" activeClassName="active">Snack 2</NavLink></li>
        <li className="snack-item"><NavLink to="/snack3" activeClassName="active">Snack 3</NavLink></li>
      </ul>
    </div>
  );
}

export default VendingMachine;
