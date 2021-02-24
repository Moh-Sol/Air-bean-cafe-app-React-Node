import React, { useState, useEffect } from 'react';
import Nav from '../Nav/Nav'



function Menu() {
    const [menuData, setMenuData] = useState('');

    useEffect(async () => {
        const response = await fetch(`http://localhost:5000/api/beans`);
        const data = await response.json();
        // console.log(data)
        setMenuData(data.menu)

    },[])

    console.log(menuData)
    return (
        <section>
        <h1>Meny</h1> 
           {menuData.map((item) => {
               return (
                    <div key={item.id}> 
                        <h2> {item.title}  {item.price}Kr</h2>
                        <p>{item.desc}</p>
                    </div>  
                
                )
            
            })} 

        </section>
    );
}

export default Menu;