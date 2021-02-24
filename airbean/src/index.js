import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// State med en array som sparar kaffe-objekten.
const initialState = {
  beverages: []
}

function reducer(state = initialState, action) {
  switch(action.type){
    case "ADD_BEVERAGE": // Lägger till drinken i arrayn.
      return {
            ...state, 
            beverages: state.beverages.push(action.payload)
          }
    case "REMOVE_BEVERAGE": // Tar bort drink 
      let index = state.beverages.indexOf(action.payload);
      let newBeverages = state.beverages;
      if (index > -1) {
        newBeverages = state.beverages.splice(index, 1);
      }
      return {
        ...state,
        beverages: newBeverages
      }
    default: 
      return state;
  }
}

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
