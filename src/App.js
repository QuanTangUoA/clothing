import React from 'react';
import './App.css';
import {Switch, Route, Link} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import shopPage from './pages/shop/shop.component.jsx';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={shopPage}/>
      </Switch>
    </div>
  );
}

export default App;
