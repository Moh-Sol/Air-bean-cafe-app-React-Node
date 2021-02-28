import React from 'react';
/* import {Link} from 'react-router-dom'; */
import style from './Hamburger-menu.module.css'
import { useHistory } from 'react-router-dom'

function HamburgerMenu() {

    const history = useHistory();
    return(
       
        <div onClick={() => {history.push('/nav')}} >
            <aside onClick={() => history.push('/nav')} className={style.hamburger}>
                <span className={style.stick}>
                </span>
            </aside>
        </div>
      
    )
}

export default HamburgerMenu;