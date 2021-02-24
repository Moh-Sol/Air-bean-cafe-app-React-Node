import React, { useState, useEffect } from 'react';
import Nav from '../Nav/Nav'
import Styles from './Menu.module.css'

import add from '../../assets/graphics/add.svg'
import bag from '../../assets/graphics/bag.svg'
import navIcon from '../../assets/graphics/navicon.svg'
import addBeverage from '../../actions/addBeverage'
import { useDispatch } from 'react-redux'


function Menu() {


    const dispatch = useDispatch()

    const [menuData, setMenuData] = useState([]);
    const [beverage, setBeverage] = useState([]);


    useEffect(async () => {
        const response = await fetch(`http://localhost:5000/api/beans`);
        const data = await response.json();
        setMenuData(data.menu)

    }, [])




    useEffect(() => {
        console.log(beverage)

        // dispatch(addBeverage(beverage))
    }, [beverage])





    // setBeverage(item); handleAdd()



    return (
        <div className={Styles.menuContainer}>
            <div className={Styles.headerContainer}>
                <img className={Styles.navIcon} src={navIcon}></img>
                <div>
                    <span> 4</span>
                    <img className={Styles.imgBag} src={bag}></img>
                </div>


            </div>
            <h1> Meny</h1>
            <ul className={Styles.dataLista}>
                {menuData.map((item) => {
                    return (
                        <li className={Styles.listItem} key={item.id}>
                            <div>
                                <img className={Styles.imgPlus} onClick={() => {
                                    setBeverage(item)
                                }} src={add}></img>
                            </div>
                            <div>
                                <span>{item.title}</span>
                                <span>{item.price}</span>
                                <h6>{item.desc}</h6>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default Menu;