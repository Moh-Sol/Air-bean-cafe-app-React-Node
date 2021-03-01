import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Styles from './Status.module.css'
import drone from '../../assets/graphics/drone.svg'

function Status() {

    const [orderNr, setOrderNr] = useState('');
    const [eta, setEta] = useState('');



    const drinksState = useSelector(state => {
        return state.beverages;
    })

    const url = 'http://localhost:5000/api/beans';


    let drinksPost = {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(drinksState)
    }

    useEffect(async () => {
        const respons = await fetch(url, drinksPost)
        const data = await respons.json()
        console.log(data)
        setEta(data.eta)
        setOrderNr(data.orderNr)

    }, []);



    return (

        <div className={Styles.statusCountainer}>
            <h4> Ordernummer #{orderNr}</h4>
            <img className={Styles.drone} src={drone}></img>
            <h1> Din beställning är på väg!</h1>
            <span> {eta} </span>  <span> minuter</span>
            <button> ok, cool! </button>
        </div>
    );
}

export default Status;