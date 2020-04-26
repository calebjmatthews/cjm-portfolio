import React from 'react';

const bg = require('../images/capitol.jpg');
import Header from './header';

export default function App() {
  return (
    <div className="app">
      <div className="main">
        <Header />
        <div className="angled-border angled-border-top"></div>
        <div className="spacer"></div>
        <div className="angled-border angled-border-bottom"></div>
        <div className="body">
          This is the world, hello.
        </div>
      </div>
      <img className="background-image" src={bg.default} />
    </div>
  )
}
