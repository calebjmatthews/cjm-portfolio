import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const bg = require('../images/capitol.jpg');
import Header from './header';
import Home from './home';
import Snippets from './snippets';

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="main">
          <Header />
          <Switch>
            <Route path="/snippets">
              <Snippets />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
        <img className="background-image" src={bg.default} />
      </div>
    </BrowserRouter>
  )
}
