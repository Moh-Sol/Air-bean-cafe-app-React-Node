
import React, { useEffect } from 'react';
import './App.css';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import Menu from './componenets/Menu/Menu'
import About from './componenets/About/About'
import Cart from './componenets/Card/Card'
import Status from './componenets/Status/Status'
import Error from './componenets/Erorr/Erorr'
import Landing from './componenets/Landing/Landing'
import Nav from './componenets/Nav/Nav'

function App() {
  const history = useHistory();

  useEffect(() => {
    // history.push('/landing')
  }, [])

  return (
    <div className="App">

      <Switch>
        <Route path="/landing" component={Landing} />
        <Route path="/menu" component={Menu} />
        <Route path="/nav" component={Nav} />
        <Route path="/about" component={About} />
        <Route path="/cart/" component={Cart} />
        <Route path="/status/" component={Status} />
        <Route component={Error} />
        <Redirect from="/" to="/landing"/>
      </Switch>
    </div>
  );
}

export default App;
