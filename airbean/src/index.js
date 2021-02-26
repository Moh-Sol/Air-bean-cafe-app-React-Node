import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// State med en array som sparar kaffe-objekten.
const initialState = {
  beverages: []
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_BEVERAGE": // Lägger till drinken i arrayn.
      return {
        ...state,
        beverages: [...state.beverages, action.payload]
      };
    case "REMOVE_BEVERAGE": // Tar bort drink 

      let newBeverages = [...state.beverages];
      let removeDrink = true;

      for (let i = 0; i < newBeverages.length; i++){
        if(newBeverages[i].id === action.payload.id){
          if (removeDrink){
            newBeverages.splice(i, 1);
            removeDrink = false;
          }
        }
      }

      return {
        ...state,
        beverages: newBeverages
      };
    default:
      return state;
  }
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
