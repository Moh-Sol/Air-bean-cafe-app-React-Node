import React from 'react';
import {Link} from 'react-router-dom';
import style from './Hamburger-menu.module.css'

function HamburgerMenu() {
    return(
        <Link to="/nav">
            <aside className={style.hamburger}>
                <span className={style.stick}>
                </span>
            </aside>
        </Link>
    )
}

export default HamburgerMenu;