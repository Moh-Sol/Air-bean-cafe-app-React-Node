import React, { useState, useEffect } from 'react';
import Nav from '../Nav/Nav'




function Menu() {
    const [menuData, setMenuData] = useState('');

    useEffect(async () => {
        const response = await fetch(`http://localhost:5000/api/beans`);
        const data = await response.json();
        // console.log(data)
        setMenuData(data.menu)

    }, [])

    console.log(menuData)




    return (
        <div>
            {menuData.map((item) => {
               return (<h1> {item.title}</h1>)
            })}

        </div>
    );
}

export default Menu;