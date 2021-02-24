import React, { useState, useEffect } from 'react';
import Nav from '../Nav/Nav'


function Menu() {
    const [menu, setMenu ] = useState ('')

    useEffect(async () => {
        const res = await fetch (`http://localhost:5000/api/beans`)
        const data = await res.json();
        setMenu(data)
    },[] )

        
    return (
        <div>
            <Nav />
            <h1>Meny</h1>

        </div>
    );
}

export default Menu;