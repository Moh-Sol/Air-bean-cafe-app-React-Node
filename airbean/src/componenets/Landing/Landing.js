import React from 'react';

import {useHistory} from 'react-router-dom'

import landingStyles from '../Landing/Landing.module.css'

import logo from '../../assets/graphics/airbean-landing.svg'

import landingLeft from '../../assets/graphics/intro-graphic-left.svg'
import landingRight from '../../assets/graphics/intro-graphic-right.svg'

function Landing() {

    const history = useHistory();

    return (
        <div
        onClick={()=> history.push('/menu')}
        className={landingStyles.landingBody}>

            <img 
            alt=""
            className={landingStyles.landingLogo}
            src={logo}></img>

            <img 
            alt=""
            src={landingLeft}></img>

            <img 
            alt=""
            className={landingStyles.landingRight}
            src={landingRight}></img>

        </div>
    );
}

export default Landing;




