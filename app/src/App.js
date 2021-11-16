import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Phones from './components/Phones';
import ListItem from './components/ListItem';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Phones}/>
        <Route path="/:slug" component={ListItem}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App;