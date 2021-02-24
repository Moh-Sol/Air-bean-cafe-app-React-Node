// import React from 'react';
// import { Link, NavLink } from 'react-router-dom'



// const Nav = (props) => {

//     console.log(props)

//     return (
//         <nav className='nav'>

//             <NavLink to='/menu'>Meny </NavLink>
//             <NavLink to='/about'>Vårt kaffe </NavLink>
//         </nav>
//     )
// }
// export default Nav;








import React from 'react';
import { NavLink } from 'react-router-dom'

import navStyles from '../Nav/Nav.module.css'

import x from '../../assets/graphics/close.svg'

export default function Nav(props) {

    return (
        <div className={navStyles.navBody}>

            <div
                onClick={() => props.toggleNav(false)}
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


    )
}
