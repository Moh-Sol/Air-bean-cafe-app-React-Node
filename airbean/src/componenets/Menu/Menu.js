import React, { useState, useEffect } from 'react';
import Nav from '../Nav/Nav'




function Menu() {
    const [data, setData] = useState('');

    useEffect(async () => {
        const response = await fetch(`http://localhost:5000/api/beans`);
        const data = await response.json();
        // console.log(data)
        setData(data)

    }, [])

    console.log(data)


    // let items = data.map((item) => {
    //     return <h1> {item.title}</h1>
    // })


    return (
        <div>
            {/* {items} */}

        </div>
    );
}

export default Menu;