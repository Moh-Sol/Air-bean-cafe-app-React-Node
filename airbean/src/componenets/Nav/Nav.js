import React from 'react';
import { Link, NavLink } from 'react-router-dom'



const Nav = () => (
    <nav className='nav'>
        <NavLink to='/menu'>Meny </NavLink>
        <NavLink to='/about'>Vårt kaffe </NavLink>
    </nav>
);
export default Nav;