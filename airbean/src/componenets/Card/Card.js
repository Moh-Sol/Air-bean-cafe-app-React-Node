import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import style from './Card.module.css'
import addBeverage from '../../actions/addBeverage';
import removeBeverage from '../../actions/removeBeverage';

function Cart() {
    const beverages = useSelector(state => state.beverages);

    const dispatch = useDispatch();
    console.log(beverages)
    return (
        <main>
            <h1>Din beställning</h1>
            <ul>
            {beverages.map( (beverage, index) => {
                return (
                    <li>
                        <h3>{beverage.title}</h3>
                        <p>{beverage.price}</p>
                        <span>{}</span>
                    </li>
                )
            })}
            </ul>
            <div>
                <h3>Total: </h3>
                <h3> {} </h3>
            </div>
        </main>
    );
}

export default Cart;