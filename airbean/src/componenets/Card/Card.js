import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import addBeverage from '../../actions/addBeverage';
import removeBeverage from '../../actions/removeBeverage';
import arrowUp from '../../assets/graphics/arrow-up.svg';
import arrowDown from '../../assets/graphics/arrow-down.svg';
import style from './Card.module.css'

function Cart() {
    const [menu, setMenu] = useState([])
    const chosenBeverages = useSelector(state => state.beverages);

    const dispatch = useDispatch();

    useEffect(() => {
        fetch(`http://localhost:5000/api/beans`)
        .then(response => response.json())
        .then(data => {
            setMenu(data.menu);
        })
    }, [chosenBeverages]);

    const beverageList = [];

    for (let i = 0; i < menu.length; i++){
        beverageList.push({...menu[i], amountOfOrder: 0});
    }

    for (let i = 0; i < beverageList.length; i++){
        for (let j = 0; j < chosenBeverages.length; j++){
            if ( chosenBeverages[j].id === beverageList[i].id ){
                beverageList[i].amountOfOrder += 1;
            }
        }
    }

    const beveragesToDisplay = beverageList.filter((beverage) => beverage.amountOfOrder > 0);

    let totalPrice = 0;

    for (let i = 0; i < beveragesToDisplay.length; i++){
        totalPrice = totalPrice + beveragesToDisplay[i].amountOfOrder * beveragesToDisplay[i].price;
    }
    return (
        <main className={style.cartContainer}>
            <section className={style.cartContents}>
                <h1 className={style.h1}>Din beställning</h1>
                <ul className={style.ul}>
                    {beveragesToDisplay.map( (beverage, index) => {
                        return (
                            <li key={index}>
                                <aside>
                                    <h3>{beverage.title}</h3>
                                    <p>{beverage.price * beverage.amountOfOrder} Kr</p>
                                </aside>
                                <aside>
                                    <hr />
                                </aside>
                                <aside>
                                    <img src={arrowUp} className={style.arrow} onClick={() => dispatch(addBeverage(beverage))}/>
                                    <span>{beverage.amountOfOrder}</span>
                                    <img src={arrowDown} className={style.arrow} onClick={() => dispatch(removeBeverage(beverage))} />
                                </aside>
                            </li>
                        )
                    })}
                </ul>
                <footer className={style.footer}>
                    <div>
                        <h3>Total: </h3>
                        <div>
                            <hr />
                        </div>
                        <h3> {totalPrice} Kr</h3>
                    </div>
                    <p>inkl moms + drönarleverans</p>
                    <button className={style.btn}>Take my money!</button>
                </footer>
            </section>
        </main>
    );
}

export default Cart;