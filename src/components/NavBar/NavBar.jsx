import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  let nav = props.user ?
    <div>
      <Link to='/' className='NavBar-link' onClick={props.handleLogout}>LOG OUT</Link>
      &nbsp;|&nbsp;&nbsp;
      <span className='NavBar-welcome'>Welcome, {props.user.name}</span>
    </div>
    :
    <div>
      <Link to='/login' className='NavBar-link'>LOG IN</Link>
      &nbsp;|&nbsp;
      <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
    </div>;

  return (
    <div className='NavBar'>
      {nav}
      <div className='title'> THE FRIDGE DOOR</div>
    </div>
  );
};

export default NavBar;