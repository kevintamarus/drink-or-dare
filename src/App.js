import React, { Component } from 'react';
import {Router, Switch, Route} from 'react-router-dom';
import history from './history';

import Home from './components/Home';
import Game from './components/Game';
import Players from './components/Players';

class App extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/players' component={Players}/>
            <Route exact path='/game' component={Game}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
