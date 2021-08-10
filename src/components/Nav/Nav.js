import React from 'react';
import { Link } from 'react-router-dom';

import './Nav.sass';

const Nav = () => (
  <div className="nav">
    <Link to="/">Accordion</Link>
    <Link to="/list">List</Link>
    <Link to="/drop-down">DropDown</Link>
    <Link to="/translate">Translate</Link>
  </div>
);

export default Nav;
