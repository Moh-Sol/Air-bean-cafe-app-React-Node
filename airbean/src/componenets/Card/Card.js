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
            console.log(data);
            setMenu(data.menu);
        })
    }, [chosenBeverages]);

    const beverageList = [];

    for (let i = 0; i < menu.length; i++){
        beverageList.push({...menu[i], amountOfOrder: 0});
    }

    console.log(chosenBeverages);
    console.log('beverageList', beverageList);

    for (let i = 0; i < beverageList.length; i++){
        for (let j = 0; j < chosenBeverages.length; j++){
            if ( chosenBeverages[j].id === beverageList[i].id ){
                beverageList[i].amountOfOrder += 1;
            }
        }
    }

    console.log('Efter andra loopen');
    console.log('beverageList', beverageList);

    return (
        <main className={style.cartContainer}>
            <section className={style.cartContents}>
                <h1>Din beställning</h1>
                <ul>
                    {chosenBeverages.map( (beverage, index) => {
                        return (
                            <li key={index}>
                                <h3>{beverage.title}</h3>
                                <p>{beverage.price}</p>
                                <img src={arrowUp} className={style.arrowUp} onClick={() => dispatch(addBeverage(beverage))}/>
                                <span>{}</span>
                                <img src={arrowDown} className={style.arrowDown} onClick={() => dispatch(removeBeverage(beverage))} />
                            </li>
                        )
                    })}
                </ul>
                <div>
                    <h3>Total: </h3>
                    <h3> {} </h3>
                </div>
            </section>
        </main>
    );
}

export default Cart;