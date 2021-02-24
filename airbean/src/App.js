
<<<<<<< HEAD
=======
import React, { useEffect } from 'react';
>>>>>>> master
import './App.css';
import { Route, Switch, useHistory } from 'react-router-dom';
import Menu from './componenets/Menu/Menu'
import About from './componenets/About/About'
import Cart from './componenets/Card/Card'
import Status from './componenets/Status/Status'
import Error from './componenets/Erorr/Erorr'
import Landing from './componenets/Landing/Landing'




function App() {
  const history = useHistory();

  useEffect(() => {
    // history.push('/landing')
  }, [])

  return (
    <div className="App">
<<<<<<< HEAD
     <h1>TEST</h1>
=======

      <Switch>
     
        <Route path="/landing" component={Landing} />
        <Route path="/menu" component={Menu} />
        <Route path="/about" component={About} />
        <Route path="/cart/" component={Cart} />
        <Route path="/status/" component={Status} />
        <Route component={Error} />
      </Switch>


    

>>>>>>> master

    </div>
  );
}

export default App;
