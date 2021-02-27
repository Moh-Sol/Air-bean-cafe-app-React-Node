import Menu from './Menu'
import React from 'react';
import { useDispatch, useSelector } from 'react-redux'


import { render, getByTestId, fireEvent } from '@testing-library/react';



test ('state menuData get data from api', ()=> {


const {container} = render (<Menu/>)


const menuTitle = getByTestId(container,'menuTitle')

expect(menuTitle.textContent).toBe('Meny')

})