import React, { useState, useEffect } from 'react';
import Nav from '../Nav/Nav'
function Menu() {


    useEffect(async() => {
        const response = await fetch (`http://localhost:5000/api/beans`);
        const data = await response.json();
        console.log(data)
        // 
    }, [])


    return (
        <div>

            <Nav />
            <h1>Meny </h1>

        </div>
    );
}

export default Menu;