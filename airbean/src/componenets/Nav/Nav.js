import React from 'react';
import { NavLink, useHistory } from 'react-router-dom'
import navStyles from '../Nav/Nav.module.css'
import x from '../../assets/graphics/close.svg'

export default function Nav() {
    const history = useHistory();

    return (
        <div className={navStyles.navBody}>

            <div
                onClick={() => history.goBack()}
                className={navStyles.xContainer}>
                <img
                    alt=""
                    className={navStyles.x}
                    src={x}
                ></img>
            </div>

            <nav
                className={navStyles.nav}>
                <NavLink
                className={navStyles.menyandcoffe}
                to='/menu'
                >Meny </NavLink>
                <p className={navStyles.rectangle}></p>
                <NavLink
                className={navStyles.menyandcoffe}
                to='/about'
                >Vårt kaffe </NavLink>
                <p className={navStyles.rectangle}></p>
            </nav>
        </div>
)}