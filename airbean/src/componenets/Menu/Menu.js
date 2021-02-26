import React, { useState, useEffect } from 'react';
import Nav from '../Nav/Nav'
import Styles from './Menu.module.css'
import HamburgerMenu from '../Hamburger-menu/HamburgerMenu'
import Cart from '../Card/Card'
import add from '../../assets/graphics/add.svg'
import bag from '../../assets/graphics/bag.svg'
import navIcon from '../../assets/graphics/navicon.svg'
import addBeverage from '../../actions/addBeverage'
import { useDispatch, useSelector } from 'react-redux'

function Menu() {
    const beveragesState = useSelector(state => {
        return state.beverages;
    })

    const dispatch = useDispatch()

    const [menuData, setMenuData] = useState([]);
    const [toggleCart, setToggleCart] = useState(false);

    useEffect(async () => {
        const response = await fetch(`http://localhost:5000/api/beans`);
        const data = await response.json();
        setMenuData(data.menu)

    }, [])

    return (
    <>
        <header className="header-container">
            <nav className="header-contents">
                {toggleCart ? <div className={Styles.hiddenBox}></div> : ''}
                <HamburgerMenu />
                <div className={Styles.imgDiv} onClick={() => setToggleCart(!toggleCart)}>
                    <span className={Styles.totalDrinks}> {beveragesState.length}</span>
                    <img className={Styles.imgBag} src={bag}></img>
                    {toggleCart ? <span className={Styles.dropdownArrow}></span> : ""}
                </div>
            </nav>
        </header>
        <div className={Styles.menuContainer}>
        {toggleCart ? <Cart /> : ""}

            <h1 className={Styles.menuh1}>Meny</h1>
            <ul className={Styles.dataLista}>
                {menuData.map((item) => {
                    return (
                        <li className={Styles.listItem} key={item.id}>
                            <div>
                                <img className={Styles.imgPlus} onClick={() => {
                                    dispatch(addBeverage(item))
                                }} src={add}></img>
                            </div>
                            <div className={Styles.menucafe}>

                                <div className={Styles.cafe}>
                                    <span >{item.title}</span>
                                    <span className={Styles.dodded}></span>

                                    <span >{item.price} Kr</span>
                                </div>

                                <h6>{item.desc}</h6>

                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    </>
 )}

export default Menu;


